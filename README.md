# 👛 Wallet Pay (Telegram) SDK

<a href="https://pay.wallet.tg/" target="_blank">
  <img src="https://raw.githubusercontent.com/reqpkg/wallet-pay-sdk/main/wallet-logo.svg" />
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
import { createWalletPaySDK } from 'wallet-pay-sdk-ts'

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
