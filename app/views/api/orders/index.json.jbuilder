

@orders.each do |order|
  json.set! order.id do
    json.partial! 'order', order: order
  end
end