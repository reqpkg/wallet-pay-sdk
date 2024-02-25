# Wallet Pay (Telegram) SDK

<a href="https://pay.wallet.tg/" target="_blank">
  <span style="display: inline-flex; padding: 8px 12px 8px 8px; background-color: rgb(244 244 246); border-radius: 50px;">
    <svg width="168" height="40" viewBox="0 0 168 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="block"><rect width="40" height="40" rx="20" fill="url(#a)"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M11.217 18.76c0-2.19 0-3.286.427-4.124a3.913 3.913 0 0 1 1.71-1.71c.837-.426 1.933-.426 4.124-.426h5.087c2.192 0 3.287 0 4.124.427a3.913 3.913 0 0 1 1.71 1.71c.122.238.21.498.271.798h-3.105c-.91 0-1.364 0-1.74.082a3.587 3.587 0 0 0-2.743 2.742C21 18.636 21 19.091 21 20c0 .91 0 1.364.082 1.74a3.587 3.587 0 0 0 2.742 2.743c.377.082.832.082 1.741.082h3.105c-.062.3-.149.56-.27.798a3.914 3.914 0 0 1-1.71 1.71c-.838.427-1.933.427-4.125.427h-5.087c-2.191 0-3.287 0-4.124-.427a3.914 3.914 0 0 1-1.71-1.71c-.427-.837-.427-1.932-.427-4.124v-2.478ZM22.304 20c0-1.217 0-1.825.226-2.295.225-.466.6-.842 1.066-1.066.47-.226 1.078-.226 2.295-.226h1.305c1.216 0 1.825 0 2.294.226.466.224.842.6 1.067 1.066.226.47.226 1.078.226 2.295 0 1.217 0 1.825-.227 2.295-.224.466-.6.841-1.066 1.066-.47.226-1.077.226-2.294.226H25.89c-1.217 0-1.825 0-2.294-.226a2.282 2.282 0 0 1-1.067-1.066c-.226-.47-.226-1.078-.226-2.295Zm4.24 0a1.304 1.304 0 1 1-2.61 0 1.304 1.304 0 0 1 2.61 0Z" fill="#fff"></path><path d="M55.63 30h3.733l2.12-13.47h.064L63.667 30h3.732l3.098-18.32h-3.174L65.47 25.583h-.076l-2.159-13.901h-3.453l-2.145 13.901h-.064l-1.866-13.901h-3.174L55.631 30Zm14.651 0h3.326l2.996-14.777h1.092V11.68h-3.097L70.28 30Zm2.552-4.126h7.605l-.56-2.577h-6.486l-.559 2.577ZM79.676 30h3.326l-4.316-18.32h-2.019v3.543L79.676 30Zm4.9 0h8.9v-2.818h-5.637V11.68h-3.263V30Zm10.537 0h8.9v-2.818h-5.637V11.68h-3.263V30Zm10.55 0h9.103v-2.818h-5.853V22.04h5.535v-2.653h-5.535v-4.888h5.853v-2.818h-9.103V30Zm14.13 0h3.25V14.499h3.656v-2.818h-10.588v2.818h3.682V30Zm14.638-6.005h3.618c1.193 0 2.196-.25 3.009-.749.812-.5 1.426-1.206 1.84-2.12.424-.923.635-2.01.635-3.263v-.038c0-1.252-.211-2.34-.635-3.262-.414-.923-1.028-1.634-1.84-2.133-.813-.5-1.816-.75-3.009-.75h-3.618v2.718h3.034c.948 0 1.646.283 2.095.85.448.559.672 1.422.672 2.59v.025c0 1.151-.224 2.01-.672 2.577-.449.567-1.151.851-2.108.851h-3.021v2.704ZM132.806 30h3.25V11.68h-3.25V30Zm10.575 0h3.326l2.996-14.777h1.092V11.68h-3.098L143.381 30Zm2.552-4.126h7.604l-.558-2.577h-6.488l-.558 2.577ZM152.775 30h3.327l-4.317-18.32h-2.018v3.543L152.775 30Zm6.818 0h3.25v-6.665l4.418-11.654h-3.276l-2.729 8.061h-.076l-2.717-8.061h-3.275l4.405 11.654V30Z" fill="#000"></path><defs><linearGradient id="a" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#60BFEF"></stop><stop offset="1" stop-color="#0094FE"></stop></linearGradient></defs></svg>
  </span>
</a>

<br />

* [Official site.](https://pay.wallet.tg/)
* [Official documentation.](https://docs.wallet.tg/pay/)

## Installation

```bash
npm i wallet-pay-sdk-ts
```

## Usage

### Initial

```js
import { createWalletPaySDK } from 'wallet-pay-sdk'

const walletPay = createWalletPaySDK('[STORE_API_KEY]', '[WEBHOOK_URI_PATH]')
```

### Create Order

```js
walletPay.create({
  amount: {
    currencyCode: 'USD',
    amount: '1.00'
  },
  autoConversionCurrency: 'USDT',
  description: 'VPN for 1 month',
  returnUrl: 'https://t.me/wallet',
  failReturnUrl: 'https://t.me/wallet',
  customData: 'client_ref=4E89',
  externalId: 'ORD-5023-4E89',
  timeoutSeconds: 10800,
  customerTelegramUserId: 0
})
```

### Get Order Preview

```js
walletPay.getPreview({ id: '[ORDER_ID]' })
```

### Get Order List

```js
walletPay.getOrderList({ count: 10, offset: 0 })
```

### Get Order Amount

```js
walletPay.getOrderAmount()
```

### Verifying webhook

1. Get `timestamp` from header `WalletPay-Timestamp`
2. Get `signature` from header `Walletpay-Signature`
3. Get `body` from request body

```js
walletPay.verifyWebhook(timestamp, signature, body) // return boolean
```