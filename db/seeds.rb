# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all
PortfolioItem.destroy_all
Order.destroy_all
Sale.destroy_all

user1 = User.create(username: 'admin', name: 'John Doe', password: 'abc123', email: 'admin@site.com')
demo_user = User.create(username: 'demologin', name: 'Johnny Sins', password: 'demopassword', email: 'demo@demo.demo')
product1 = Product.create(name: 'Bred', model: "Air Jordan 1", brand: "Jordan", description: 'The Classic', style_code: 4281, colorway: 'black red', retail_price: 170, img_path: 'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/6/3/63611742962-air-jordan-1-retro-high-og-bred-black-varsity-red-white-011845_1.jpg', release_date: '3/9/2016')
product2 = Product.create(name: 'White Cement', model: "Air Jordan 3", brand: "Jordan", description: 'Also a classic', style_code: '136064-105', colorway: 'white fire red cement grey black', retail_price: 200, img_path: 'https://stockx-360.imgix.net/Air-Jordan-3-Retro-White-Cement-2011/Images/Air-Jordan-3-Retro-White-Cement-2011/Lv2/img01.jpg', release_date: '3/9/2016')
product3 = Product.create(name: 'Space Jams', model: "Air Jordan 11", brand: "Jordan", description: 'Your childhood', style_code: '378037-003', colorway: 'black dark concord white', retail_price: 220, img_path: 'https://stockx.imgix.net/Jordan-11-Retro-Space-Jams-2016-Product.jpg', release_date: '10/12/2016')

order1 = Order.create!(product_id: product1.id, asker_id: user1.id, price: 500, order_type: 'ask', active: false, sold: true, shipped: true, sex: 'M', size: '9')
order2 = Order.create!(product_id: product2.id, asker_id: user1.id, price: 50, order_type: 'ask', active: false, sold: true, shipped: true, sex: 'M', size: '9')
order3 = Order.create!(product_id: product3.id, asker_id: user1.id, price: 5, order_type: 'ask', active: false, sold: true, shipped: true, sex: 'M', size: '9')



PortfolioItem.create(user_id: user1.id, product_id: product1.id, size: 'M 9', purchase_price: 1)
PortfolioItem.create(user_id: user1.id, product_id: product2.id, size: 'M 9', purchase_price: 1)
PortfolioItem.create(user_id: demo_user.id, product_id: product3.id, size: 'M 9', purchase_price: 1)

sale1 = Sale.create!(product_id: order1.product_id, order_id: order1.id, sex: order1.sex, size: order1.size, date: Date.today.to_s.split('-').join('/'), active: 'true', price: order1.price)
sale2 = Sale.create!(order_id: order2.id, product_id: order2.product_id, sex: order2.sex, size: order2.size, date: Date.today.to_s.split('-').join('/'), active: 'true', price: order2.price)
sale3 = Sale.create!(order_id: order3.id, product_id: order3.product_id, sex: order3.sex, size: order3.size, date: Date.today.to_s.split('-').join('/'), active: 'true', price: order3.price)
sale3 = Sale.create!(order_id: order3.id, product_id: order3.product_id, sex: order3.sex, size: order3.size, date: Date.yesterday.to_s.split('-').join('/'), active: 'true', price: order3.price * 1000)
