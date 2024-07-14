require 'net/http'
require 'json'

class CurrencyConversionService
  API_URL = 'https://api.exchangerate-api.com/v4/latest/USD'

  def self.convert(amount, from_currency, to_currency)
    exchange_rates = fetch_exchange_rates
    from_rate = exchange_rates[from_currency]
    to_rate = exchange_rates[to_currency]
    converted_amount = (amount / from_rate) * to_rate
    converted_amount.round(2)
  end

  def self.fetch_exchange_rates
    uri = URI(API_URL)
    response = Net::HTTP.get(uri)
    data = JSON.parse(response)
    data['rates']
  end
end
