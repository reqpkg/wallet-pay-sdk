import { createHmac } from 'node:crypto'

import { WalletPayClient } from './client'
import type { CreateOrderRequest, WebhookMessage } from './client'

const WEBHOOK_HTTP_METHOD = 'POST'

/**
 *
 * @param walletPayStoreApiKey - WalletPay store API key
 * @param webhookUriPath - The path of the webhook URI
 */
export function createWalletPaySDK(walletPayStoreApiKey: string, webhookUriPath?: string) {
  const walletPayClient = new WalletPayClient()
  const requestParams = {
    headers: {
      'Wpay-Store-Api-Key': walletPayStoreApiKey,
    },
  }

  return {
    ...walletPayClient.wpay,

    create(data: CreateOrderRequest) {
      return walletPayClient.wpay.create(data, requestParams)
    },

    getPreview(data: Parameters<typeof walletPayClient.wpay.getPreview>[0]) {
      return walletPayClient.wpay.getPreview(data, requestParams)
    },

    getOrderList(data: Parameters<typeof walletPayClient.wpay.getOrderList>[0]) {
      return walletPayClient.wpay.getOrderList(data, requestParams)
    },

    getOrderAmount() {
      return walletPayClient.wpay.getOrderAmount(requestParams)
    },

    verifyWebhook(timestamp: string, signature: string, body: WebhookMessage[]): boolean {
      if (!webhookUriPath) {
        throw new Error('"webhookUriPath" is required to verify webhook')
      }

      return (
        computeSignature(
          walletPayStoreApiKey,
          WEBHOOK_HTTP_METHOD,
          webhookUriPath,
          timestamp,
          JSON.stringify(body),
        ) === signature
      )
    },
  }
}

function computeSignature(
  wpayStoreApiKey: string,
  httpMethod: string,
  uriPath: string,
  timestamp: string,
  body: string,
) {
  const base64Body = Buffer.from(body).toString('base64')
  const stringToSign = `${httpMethod}.${uriPath}.${timestamp}.${base64Body}`
  const mac = createHmac('sha256', wpayStoreApiKey)
  mac.update(stringToSign)
  const byteArraySignature = mac.digest()
  return byteArraySignature.toString('base64')
}

export type { WebhookMessage } from './client'
