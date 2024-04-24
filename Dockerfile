FROM node:21-alpine as base
LABEL author="Ivan Orlovsky"

#Получаем зависимости
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /front
COPY package.json package-lock.json ./
RUN npm ci

#Сборка проекта
FROM base AS builder
WORKDIR /front
COPY --from=deps /front/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

#Запуск приложения
FROM base AS runner
WORKDIR /front

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /front/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /front/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /front/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3000

CMD ["node", "server.js"]