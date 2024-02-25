/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CreateOrderRequest {
  amount: MoneyAmount;
  /**
   * Crypto currency you want to receive no matter what crypto currency the payer will choose to pay.  If payer's crypto doesn't match this `autoConversionCurrency`, it will be converted automatically. This conversion will cost additional 1% fee to your regular payment fee.
   * Limitations:
   * * If your order amount in `autoConversionCurrency` is less than 0.1 TON / 1 USDT / 0.000017 BTC accordingly,  we won't be able to convert it automatically, so the payer will have the only Payment Option, which doesn't require conversion - `autoConversionCurrency`
   * * if you specify the order amount in crypto, then `autoConversionCurrency` can only be this crypto (or absent).
   * If `autoConversionCurrency` is absent, you will receive the currency that payer will choose.
   */
  autoConversionCurrency?: AutoConversionCurrency;
  /**
   * Description of the order
   * @minLength 5
   * @maxLength 100
   * @example "VPN for 1 month"
   */
  description: string;
  /**
   * Url to redirect after paying order.  Note: if you want to open your telegram WebApp (https://core.telegram.org/bots/webapps)  then you should use special link format here (https://core.telegram.org/api/links#named-bot-web-app-links).  Example: https://t.me/wallet/start?startapp"
   * @maxLength 255
   * @example "https://t.me/wallet"
   */
  returnUrl?: string | null;
  /**
   * Url to redirect after unsuccessful order completion (expiration/cancelation/etc)
   * @maxLength 255
   * @example "https://t.me/wallet"
   */
  failReturnUrl?: string | null;
  /** Any custom string, will be provided through webhook and order status polling */
  customData?: CustomData;
  /** Order ID in Merchant system. Use to prevent orders duplication due to request retries */
  externalId: ExternalId;
  /**
   * Order TTL, if the order is not paid within the timeout period
   * @format int64
   * @min 30
   * @max 864000
   * @example 10800
   */
  timeoutSeconds: number;
  /**
   * The customer's telegram id (`User_id`). For more details please follow the link https://core.telegram.org/bots/api#available-types
   * @format int64
   */
  customerTelegramUserId: number;
}

export interface CreateOrderResponse {
  /** `SUCCESS` - new order created; `data` is present. `ALREADY` - order with completely same parameters including externalId already exists; `data` is present. `CONFLICT` - order with different parameters but same externalId already exists; `data` is absent. `ACCESS_DENIED` - you're not permitted to create orders, contact support in this case; `data` is absent. `INVALID_REQUEST` - we failed to handle your request, check that all required fields sent properly. `INTERNAL_ERROR` - unexpected error on our side */
  status: "SUCCESS" | "ALREADY" | "CONFLICT" | "ACCESS_DENIED" | "INVALID_REQUEST" | "INTERNAL_ERROR";
  /**
   * Verbose reason of non-success result
   * @example ""
   */
  message?: string;
  /** Response payload, present if status is SUCCESS */
  data?: OrderPreview;
}

export interface GetOrderPreviewResponse {
  /** Operation result status, always present */
  status: "SUCCESS" | "INVALID_REQUEST" | "INTERNAL_ERROR";
  /**
   * Verbose reason of non-success result
   * @example ""
   */
  message?: string;
  /** Response payload, present if status is SUCCESS */
  data?: OrderPreview;
}

/** Response payload, present if status is SUCCESS */
export interface OrderPreview {
  /**
   * Order id
   * @example 2703383946854401
   */
  id: string;
  /** Order status */
  status: OrderStatus;
  /** Human-readable short order id shown to a customer */
  number: OrderNumber;
  amount: MoneyAmount;
  /**
   * Crypto currency you want to receive no matter what crypto currency the payer will choose to pay.  If payer's crypto doesn't match this `autoConversionCurrency`, it will be converted automatically. This conversion will cost additional 1% fee to your regular payment fee.
   * Limitations:
   * * If your order amount in `autoConversionCurrency` is less than 0.1 TON / 1 USDT / 0.000017 BTC accordingly,  we won't be able to convert it automatically, so the payer will have the only Payment Option, which doesn't require conversion - `autoConversionCurrency`
   * * if you specify the order amount in crypto, then `autoConversionCurrency` can only be this crypto (or absent).
   * If `autoConversionCurrency` is absent, you will receive the currency that payer will choose.
   */
  autoConversionCurrency?: AutoConversionCurrency;
  /**
   * ISO-8601 date time when order was created
   * @format date-time
   */
  createdDateTime: string;
  /**
   * ISO-8601 date time when order timeout expires
   * @format date-time
   */
  expirationDateTime: string;
  /**
   * ISO-8601 date time when order was completed (paid/expired/etc)
   * @format date-time
   */
  completedDateTime?: string;
  /**
   * URL to be shown to the payer by the store. Сan be used in 'Telegram Bot' only.  **Important:** this link can be opened ONLY in dialog with Telegram-bot specified in your Store, ONLY by user with `telegramUserId` specified in the Order.
   * @example "https://t.me/wallet?startattach=wpay_order_2703383946854401"
   */
  payLink: string;
  /**
   * URL to be shown to the payer by the store. Can be used in 'Telegram Bot' and 'Telegram Web App'.  **Important:** this link can be opened ONLY in dialog with Telegram-bot specified in your Store, ONLY by user with `telegramUserId` specified in the Order.
   * @example "https://t.me/wallet/start?startapp=wpay_order-orderId__2703383946854401"
   */
  directPayLink: string;
}

export interface GetOrderReconciliationListResponse {
  /** Operation result status, always present */
  status: "SUCCESS" | "INVALID_REQUEST" | "INTERNAL_ERROR";
  /**
   * Verbose reason of non-success result
   * @example ""
   */
  message?: string;
  /** Response payload, present if status is SUCCESS */
  data?: OrderReconciliationList;
}

/** Response payload, present if status is SUCCESS */
export interface OrderReconciliationList {
  items: OrderReconciliationItem[];
}

export interface OrderReconciliationItem {
  /** Order id */
  id: OrderId;
  /** Order status */
  status: OrderStatus;
  amount: MoneyAmount;
  /**
   * Crypto currency you want to receive no matter what crypto currency the payer will choose to pay.  If payer's crypto doesn't match this `autoConversionCurrency`, it will be converted automatically. This conversion will cost additional 1% fee to your regular payment fee.
   * Limitations:
   * * If your order amount in `autoConversionCurrency` is less than 0.1 TON / 1 USDT / 0.000017 BTC accordingly,  we won't be able to convert it automatically, so the payer will have the only Payment Option, which doesn't require conversion - `autoConversionCurrency`
   * * if you specify the order amount in crypto, then `autoConversionCurrency` can only be this crypto (or absent).
   * If `autoConversionCurrency` is absent, you will receive the currency that payer will choose.
   */
  autoConversionCurrency?: AutoConversionCurrency;
  /** @example "ORD-5023-4E89" */
  externalId: string;
  /**
   * The order customer telegram id
   * @format int64
   */
  customerTelegramUserId?: number;
  /**
   * ISO-8601 date time when order was created
   * @format date-time
   */
  createdDateTime: string;
  /**
   * ISO-8601 date time when order timeout expires
   * @format date-time
   */
  expirationDateTime: string;
  /**
   * ISO-8601 date time when order was paid
   * @format date-time
   */
  paymentDateTime?: string;
  /**
   * User selected payment option.
   * Payer paid the `amount`; you received the `amountNet`; our service took the `amountFee`;
   *
   * The `amount` here may differ from `amount` in the Order because we allow merchants to set order amount in fiat currency,
   * but payer can pay only in cryptocurrency on his choice.
   * (similar to a situation when price in a shop is written in USD, but you can pay with your EUR debit card)
   * You will receive `autoConversionCurrency`, if set, or the cryptocurrency that payer has chosen otherwise.
   */
  selectedPaymentOption?: PaymentOption;
}

/**
 * User selected payment option.
 * Payer paid the `amount`; you received the `amountNet`; our service took the `amountFee`;
 *
 * The `amount` here may differ from `amount` in the Order because we allow merchants to set order amount in fiat currency,
 * but payer can pay only in cryptocurrency on his choice.
 * (similar to a situation when price in a shop is written in USD, but you can pay with your EUR debit card)
 * You will receive `autoConversionCurrency`, if set, or the cryptocurrency that payer has chosen otherwise.
 */
export interface PaymentOption {
  amount: MoneyAmount;
  amountFee: MoneyAmount;
  amountNet: MoneyAmount;
  /**
   * Exchange rate of `order.currency` to `payment.currency`
   * @format BigDecimal
   * @example "0.44"
   */
  exchangeRate: string;
}

export interface OrderAmountResponse {
  /** Operation result status, always present */
  status: "SUCCESS" | "INVALID_REQUEST" | "INTERNAL_ERROR";
  /**
   * Verbose reason of non-success result
   * @example ""
   */
  message?: string;
  /** Response payload, present if status is SUCCESS */
  data?: OrderAmount;
}

/** Response payload, present if status is SUCCESS */
export interface OrderAmount {
  /**
   * Store orders total amount
   * @format int64
   */
  totalAmount: number;
}

export interface MoneyAmount {
  /**
   * Currency code
   * @example "USD"
   */
  currencyCode: "TON" | "BTC" | "USDT" | "EUR" | "USD" | "RUB";
  /**
   * Big decimal string representation
   * @format BigDecimal
   * @example "1.00"
   */
  amount: string;
}

/**
 * Crypto currency you want to receive no matter what crypto currency the payer will choose to pay.  If payer's crypto doesn't match this `autoConversionCurrency`, it will be converted automatically. This conversion will cost additional 1% fee to your regular payment fee.
 * Limitations:
 * * If your order amount in `autoConversionCurrency` is less than 0.1 TON / 1 USDT / 0.000017 BTC accordingly,  we won't be able to convert it automatically, so the payer will have the only Payment Option, which doesn't require conversion - `autoConversionCurrency`
 * * if you specify the order amount in crypto, then `autoConversionCurrency` can only be this crypto (or absent).
 * If `autoConversionCurrency` is absent, you will receive the currency that payer will choose.
 * @example "USDT"
 */
export enum AutoConversionCurrency {
  TON = "TON",
  BTC = "BTC",
  USDT = "USDT",
}

/**
 * Order status
 * @example "ACTIVE"
 */
export enum OrderStatus {
  ACTIVE = "ACTIVE",
  EXPIRED = "EXPIRED",
  PAID = "PAID",
  CANCELLED = "CANCELLED",
}

/**
 * Type of webhook message
 * @example "ORDER_PAID"
 */
export enum WebhookMessageType {
  ORDER_FAILED = "ORDER_FAILED",
  ORDER_PAID = "ORDER_PAID",
}

/**
 * Order id
 * @format int64
 * @example 2703383946854401
 */
export type OrderId = number;

/**
 * Human-readable short order id shown to a customer
 * @example "9aeb581c"
 */
export type OrderNumber = string;

/**
 * Order ID in Merchant system. Use to prevent orders duplication due to request retries
 * @maxLength 255
 * @example "ORD-5023-4E89"
 */
export type ExternalId = string;

/**
 * Any custom string, will be provided through webhook and order status polling
 * @maxLength 255
 * @example "client_ref=4E89"
 */
export type CustomData = string | null;

/** Notification about completed Order */
export interface WebhookMessage {
  /**
   * ISO-8601 when order was completed
   * @format date-time
   * @example "2023-07-25T13:17:40.612897Z"
   */
  eventDateTime: string;
  /**
   * Idempotency key. We send a max of one type of webhook message for one event.
   * @format int64
   */
  eventId: number;
  /** Type of webhook message */
  type: WebhookMessageType;
  /** Order data. SelectedPaymentOption is absent for failed orders. Status is absent for paid orders. */
  payload: WebhookPayload;
}

/** Order data. SelectedPaymentOption is absent for failed orders. Status is absent for paid orders. */
export interface WebhookPayload {
  /** Order id */
  id: OrderId;
  /** Human-readable short order id shown to a customer */
  number: OrderNumber;
  /** Order ID in Merchant system. Use to prevent orders duplication due to request retries */
  externalId: ExternalId;
  /** Order status */
  status?: OrderStatus;
  /** Any custom string, will be provided through webhook and order status polling */
  customData?: CustomData;
  orderAmount: MoneyAmount;
  /**
   * User selected payment option.
   * Payer paid the `amount`; you received the `amountNet`; our service took the `amountFee`;
   *
   * The `amount` here may differ from `amount` in the Order because we allow merchants to set order amount in fiat currency,
   * but payer can pay only in cryptocurrency on his choice.
   * (similar to a situation when price in a shop is written in USD, but you can pay with your EUR debit card)
   * You will receive `autoConversionCurrency`, if set, or the cryptocurrency that payer has chosen otherwise.
   */
  selectedPaymentOption?: PaymentOption;
  /**
   * ISO 8601 timestamp indicating the time of order completion, in UTC
   * @format date-time
   * @example "2023-07-25T13:17:40.612897Z"
   */
  orderCompletedDateTime: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://pay.wallet.tg";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data.data;
    });
  };
}

/**
 * @title Wallet Pay
 * @version 1.2.0
 * @baseUrl https://pay.wallet.tg
 *
 * ### Beta API has been released for first users!
 * We highly appreciate any kind of feedback as it helps us improve our services. Please share your thoughts using this [form](https://forms.gle/TgBB5Dh35i9QvsTf8).
 *
 * # Changelog
 * |Date|Description of change|
 * |-------------|-----------------------|
 * | 2023/08/08  | Added the new `directPayLink` to `OrderPreview` object. This link format can be used in Telegram Web Apps                    |
 * | 2023/12/15  | Added the new `autoConversionCurrency` to `CreateOrderRequest` object.                                                       |
 *
 * # Get started
 * **[Wallet Pay](https://pay.wallet.tg/)** is a business platform within [Wallet](https://t.me/wallet) that enables payment transactions between merchants and customers.
 *
 * Useful links:
 * - [Wallet Pay Business Support](https://t.me/WalletPay_supportbot) is a Telegram bot for reaching out the Wallet Pay Support Team.
 * - [Demo Store Bot](https://t.me/PineAppleDemoWPStoreBot) is a Telegram bot for Wallet Pay functionality introduction. (Attention: all payments are carried out in real assets)
 * - [Merchant Community](https://t.me/+6TReWBEyZxI5Njli) is a Telegram group for sharing an experience and solutions between group members.
 *
 * To get started please follow the steps below.
 *
 * ### 1. Log in to the 'Merchant account'
 *
 * Businesses or developers can get started by following the next steps to create a Partner account with us:
 * 1. Follow the link https://pay.wallet.tg.
 * 2. Click 'Login via Telegram'.
 * 3. Enter your phone number in the popup window 'oauth.telegram.org appears', and click 'Apply'.
 * 4. You will receive a message in Telegram with an authorisation request, click  'Apply'.
 * 5. Click 'Apply' in the popup window  'oauth.telegram.org' in your Web browser.
 *
 * **We recommend using an account to which the person dealing with the finances has access. For legal entities, it is an authorized representative.**
 *
 * ### 2. Take a short survey
 *
 * If you are logging in for the first time, or some additional information is required, Wallet Pay offers you to answer several questions for more details. There are two steps:
 * 1. Questionnaire
 * 2. KYB (Know-Your-Business) or KYC (Know-Your-Customer) checks
 *
 * Once completed, your application will be reviewed shortly, and you will be notified about the results. If successful, you will see the fee charged by the service, and get access to your account where you can start the integration.
 *
 * **For legal entities, the form can be filled out only by an authorized representative: a director or an employee with a power of attorney.**
 *
 * ### 3. Create the first 'Store'
 * Once the 'Survey' is passed successfully, you will be offered to Create your first store.
 *
 * ### 4. Generate 'API key'
 * After naming the first store you will be offered to set it up:
 * 1. Generate API Key.
 * 2. Copy your API Key and start integration with us.
 *
 * ### 5. Create an Order
 * Using generated Wallet Pay API proceed the following:
 * 1. Create an Order.
 * 2. Choose the appropriate payment link based on the store implementation and show it to your customer:
 *     - `payLink` for 'Text Telegram Bot'
 *     - `directPayLink` for 'Text Telegram Bot' or [Telegram Web App](https://core.telegram.org/bots/webapps).
 *     - for [Telegram Web App](https://core.telegram.org/bots/webapps) use `openTelegramLink(url)` function, not `openLink(url[, options])` (unless you want to open the link in browser)
 *     - for 'Text Telegram Bot' use `url` field of regular [Inline Button](https://core.telegram.org/bots/api#inlinekeyboardbutton), not MenuButtonWebApp or anything else
 * 3. Check the Order status.
 *
 * **Only the specified 'customerTelegramUserId' can open a payment page.**
 *
 * ### 6. Withdraw the funds
 * After the customer confirms the payment, the funds are credited to your Assets and held for 48 hours by default.
 * After this time expires, you can withdraw the funds to the balance of **your [Wallet](https://t.me/wallet) account** you used to log in to Wallet Pay service.
 *
 * ### 7. Refund
 * For now you can refund from your Wallet account you use to log in to Wallet Pay. But it will be available in your Merchant account in the nearest future.
 *
 * ### 8. Sign out from the 'Merchant account'
 * To sign out from your account click 'Sign out'. To log in to your account click 'Log in'.
 * If you want to log in under another Telegram account please proceed the following:
 * 1. Go to Telegram and open 'Telegram (Service notification)' dialog.
 * 2. Select 'Terminate session'.
 * 3. Now you can log in using another Telegram account.
 *
 * # Design Guidelines
 * When integrating your 'Telegram Bot' with the 'Wallet pay API', please make sure that the payment button complies with the following guidelines:
 *
 * 1. The payment button should be named exactly like one of these two:
 *     1. `:purse: Wallet Pay`
 *     2. `:purse: Pay via Wallet`.
 * 2. The payment button is located above the other buttons (if you have others).
 *
 * Note: `:purse:` is an emoji (see https://emojipedia.org/purse/).
 *
 * Please see the example in [Demo Store Bot](https://t.me/PineAppleDemoWPStoreBot).
 *
 * # Use Case
 * 1. The customer initiates the payment process in the merchant's store.
 * 2. Merchant's bot:
 *     1. addresses the POST order;
 *     2. receives the payment link in response;
 *     3. shows the user the payment button.
 * 3. The customer taps the payment button.
 * 4. The merchant's store redirects the customer to the payment link in the Wallet.
 * 5. If the customer uses Wallet for the first time, they agree to:
 *     1. add Wallet to the Attachments menu;
 *     2. allow Wallet to send messages.
 *  6. Wallet:
 *     1. authenticates the customer;
 *     2. checks the balance and displays a form:
 *         1. to confirm the payment (if the balance is sufficient);
 *         2. to top up the balance (if the balance is insufficient).
 *   7. The customer confirms the payment.
 * 8.  Wallet:
 *     1. withdraws the funds from the customer's account and credits them to the partner store's account;
 *     2. redirects the customer back to the partner's specified returnURL;
 *     3. sends a webhook to the merchant.
 *
 * # Troubleshooting
 *
 * ## "Something went wrong" screen
 * The most common reasons of the "Something went wrong" screen when someone opens `payLink` or `directPayLink` are:
 * 1. Opening outside Telegram-bot or 'Telegram Web App' specified in your Store
 * 2. Opening from [Gaming Platform](https://core.telegram.org/bots/games), it's not supported
 * 3. Opening by customer whos `telegramUserId` does not match provided `customerTelegramUserId` field in the Order
 * 4. Opening by customer who've been banned from using Wallet Pay as payer for some reason. Contact our [Wallet Pay Business Support](https://t.me/WalletPay_supportbot) for details
 * 5. Unexpected error on our side. Contact [Wallet Pay Business Support](https://t.me/WalletPay_supportbot) for help
 *
 * # Authorization
 * The 'API key' must be provided in the HTTP header 'Wpay-Store-Api-Key'.
 *
 * Example:
 *   ```sh
 * curl -X POST --location 'https://pay.wallet.tg/wpay/store-api/v1/order' \
 * --header 'Wpay-Store-Api-Key: YOUR_STORE_API_KEY'\
 * --header 'Content-Type: application/json' \
 * --header 'Accept: application/json'
 * -d '{
 *   "amount": {
 *     "amount": 30.45,
 *     "currencyCode": "TON"
 *   },
 *   "externalId": "ORD-5023-4E89",
 *   "timeoutSeconds": 10800,
 *   "description": "VPN for 1 month",
 *   "returnUrl": "https://t.me/wallet",
 *   "failReturnUrl": "https://t.me/wallet",
 *   "customData": "client_ref=4E89"
 * }'
 * ```
 *
 * # HTTP status codes
 * The table below describes the possible HTTP response codes you can receive when sending an API request.
 * |Code|Description|
 * |-------------|-----------------------|
 * | 200         | OK                    |
 * | 400         | Invalid request       |
 * | 401         | Invalid API key       |
 * | 404         | Not found             |
 * | 429         | Request limit reached |
 * | 500         | Unexpected error      |
 */
export class WalletPayClient<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  wpay = {
    /**
     * @description Create an order
     *
     * @tags Order
     * @name Create
     * @request POST:/wpay/store-api/v1/order
     */
    create: (data: CreateOrderRequest, params: RequestParams = {}) =>
      this.request<CreateOrderResponse, any>({
        path: `/wpay/store-api/v1/order`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Return list of store orders sorted by creation time in ascending order
     *
     * @tags Order Reconciliation
     * @name GetOrderList
     * @request GET:/wpay/store-api/v1/reconciliation/order-list
     */
    getOrderList: (
      query: {
        /**
         * Specifying the amount of excluded from a response the first N orders
         * @format int64
         * @min 0
         * @example 0
         */
        offset: number;
        /**
         * Specifying the limit of orders for the request
         * @format int32
         * @min 0
         * @max 10000
         * @example 100
         */
        count: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetOrderReconciliationListResponse, any>({
        path: `/wpay/store-api/v1/reconciliation/order-list`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns total count of all created orders in the Store, including all - paid and unpaid
     *
     * @tags Order Reconciliation
     * @name GetOrderAmount
     * @request GET:/wpay/store-api/v1/reconciliation/order-amount
     */
    getOrderAmount: (params: RequestParams = {}) =>
      this.request<OrderAmountResponse, any>({
        path: `/wpay/store-api/v1/reconciliation/order-amount`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve the order information
     *
     * @tags Order
     * @name GetPreview
     * @request GET:/wpay/store-api/v1/order/preview
     */
    getPreview: (
      query: {
        /** Order id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetOrderPreviewResponse, any>({
        path: `/wpay/store-api/v1/order/preview`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
}
