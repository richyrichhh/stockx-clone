@sales.each do |sale|
  json.set! sale.id do
    json.partial! 'sale', sale: sale
  end
end