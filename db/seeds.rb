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
demo_user = User.create(username: 'demologin', name: 'Demo User', password: 'demopassword', email: 'demo@demo.demo')
product1 = Product.create(name: 'Bred', model: "Air Jordan 1", brand: "Jordan", description: 'A classic', style_code: 4281, colorway: 'black red', retail_price: 170, img_path: 'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/6/3/63611742962-air-jordan-1-retro-high-og-bred-black-varsity-red-white-011845_1.jpg', release_date: '9/3/2016')
product2 = Product.create(name: 'White Cement', model: "Air Jordan 3", brand: "Jordan", description: 'Also a classic', style_code: '136064-105', colorway: 'white fire-red cement-grey black', retail_price: 200, img_path: 'https://stockx-360.imgix.net/Air-Jordan-3-Retro-White-Cement-2011/Images/Air-Jordan-3-Retro-White-Cement-2011/Lv2/img01.jpg', release_date: '9/3/2016')
product3 = Product.create(name: 'Space Jams', model: "Air Jordan 11", brand: "Jordan", description: 'Your childhood', style_code: '378037-003', colorway: 'black dark-concord white', retail_price: 220, img_path: 'https://stockx.imgix.net/Jordan-11-Retro-Space-Jams-2016-Product.jpg', release_date: '12/10/2016')
product4 = Product.create!(name: 'Royal', model: "Air Jordan 1", brand: "Jordan", description: 'The first', style_code: '4282', colorway: 'black royal-blue', retail_price: '65', release_date: '15/9/1985', img_path: 'https://stockx.imgix.net/Air-Jordan-1-OG-Royal-1985.png')
product5 = Product.create!(name: 'Fire Red', model: "Air Jordan 3", brand: "Jordan", description: '👍', style_code: 4367, colorway: 'white fire-red', retail_price: 75, img_path: 'https://stockx.imgix.net/Air-Jordan-3-OG-Fire-Red-1988.jpg', release_date: '1/1/1988')
product6 = Product.create!(name: 'Concord', model: "Air Jordan 11", brand: "Jordan", description: 'Another classic', style_code: '136046-171', colorway: 'white black dark-concord', retail_price: 165, img_path: 'https://stockx-360.imgix.net/air-jordan-11-retro-concord-2011_TruView/Images/air-jordan-11-retro-concord-2011_TruView/Lv2/img01.jpg', release_date: '23/12/2011')
product7 = Product.create!(name: 'Tiffany', model: 'Nike SB Dunk Low', brand: 'Nike', description: 'Iconic', style_code: '304292-402', colorway: 'aqua chrome', retail_price: 89, img_path: 'https://stockx.imgix.net/Nike-Dunk-SB-Low-Diamond-Supply-Co-Tiffany-Product.jpg', release_date: '1/08/2005')
product8 = Product.create!(name: 'Flash', model: 'Nike SB Dunk Low', brand: 'Nike', description: 'Chris\'s favorite', style_code: '304292-801', colorway: 'orange-flash black', retail_price: 60, img_path: 'https://stockx.imgix.net/Nike-SB-Dunk-Low-Orange-Flash.png', release_date: '1/10/2002')
product9 = Product.create!(name: 'Blink', model: 'Air Yeezy', brand: 'Nike', description: 'Part of Kanye\'s first yeezy collection', style_code: '366164-003', colorway: 'black black', retail_price: 250, img_path: 'https://stockx.imgix.net/Nike-Air-Yeezy-1-Black-Pink-Blink.jpg', release_date: '4/4/2009')
product10 = Product.create!(name: 'Turtledove', model: 'Yeezy Boost 350', brand: 'adidas', description: 'First adidas shoe added here', style_code: 'AQ4832', colorway: 'turtledove blue grey-white', retail_price: 200, img_path: 'https://stockx.imgix.net/Adidas-Yeezy-Boost-350-Low-Turtledove-Product.jpg', release_date: '27/6/2015')


order1 = Order.create!(product_id: product1.id, asker_id: user1.id, price: 500, order_type: 'buy', active: 'true', sold: 'false', shipped: 'false', sex: 'M', size: '9')
order2 = Order.create!(product_id: product2.id, asker_id: user1.id, price: 50, order_type: 'buy', active: 'true', sold: 'false', shipped: 'false', sex: 'M', size: '9')
order3 = Order.create!(product_id: product3.id, asker_id: user1.id, price: 5, order_type: 'buy', active: 'true', sold: 'false', shipped: 'false', sex: 'M', size: '9')
order4 = Order.create!(product_id: product4.id, asker_id: user1.id, price: 123, order_type: 'buy', active: 'true', sold: 'false', shipped: 'false', sex: 'M', size: '9')
order5 = Order.create!(product_id: product5.id, asker_id: user1.id, price: 456, order_type: 'buy', active: 'true', sold: 'false', shipped: 'false', sex: 'M', size: '9')
order6 = Order.create!(product_id: product6.id, asker_id: user1.id, price: 789, order_type: 'buy', active: 'true', sold: 'false', shipped: 'false', sex: 'M', size: '9')
order7 = Order.create!(product_id: product7.id, asker_id: user1.id, price: 400, order_type: 'buy', active: 'true', sold: 'false', shipped: 'false', sex: 'M', size: '9')
order8 = Order.create!(product_id: product8.id, asker_id: user1.id, price: 850, order_type: 'buy', active: 'true', sold: 'false', shipped: 'false', sex: 'M', size: '9')
order9 = Order.create!(product_id: product9.id, asker_id: user1.id, price: 2500, order_type: 'buy', active: 'true', sold: 'false', shipped: 'false', sex: 'M', size: '9')
order10 = Order.create!(product_id: product10.id, asker_id: user1.id, price: 1000, order_type: 'buy', active: 'true', sold: 'false', shipped: 'false', sex: 'M', size: '9')




PortfolioItem.create(user_id: user1.id, product_id: product1.id, size: 'M 9', purchase_price: 1)
PortfolioItem.create(user_id: user1.id, product_id: product2.id, size: 'M 9', purchase_price: 1)
PortfolioItem.create(user_id: demo_user.id, product_id: product3.id, size: 'M 9', purchase_price: 1)

sale1 = Sale.create!(product_id: order1.product_id, order_id: order1.id, sex: order1.sex, size: order1.size, date: Date.today.to_s.split('-').join('/'), active: 'true', price: order1.price)
sale2 = Sale.create!(order_id: order2.id, product_id: order2.product_id, sex: order2.sex, size: order2.size, date: Date.today.to_s.split('-').join('/'), active: 'true', price: order2.price)
sale3 = Sale.create!(order_id: order3.id, product_id: order3.product_id, sex: order3.sex, size: order3.size, date: Date.today.to_s.split('-').join('/'), active: 'true', price: order3.price)
sale4 = Sale.create!(order_id: order3.id, product_id: order3.product_id, sex: order3.sex, size: order3.size, date: Date.yesterday.to_s.split('-').join('/'), active: 'true', price: order3.price * 1000)
sale5 = Sale.create!(order_id: order4.id, product_id: order4.product_id, sex: order4.sex, size: order4.size, date: Date.today.to_s.split('-').join('/'), active: 'true', price: order4.price)
sale6 = Sale.create!(order_id: order5.id, product_id: order5.product_id, sex: order5.sex, size: order5.size, date: Date.today.to_s.split('-').join('/'), active: 'true', price: order5.price)
sale7 = Sale.create!(order_id: order6.id, product_id: order6.product_id, sex: order6.sex, size: order6.size, date: Date.today.to_s.split('-').join('/'), active: 'true', price: order6.price)
sale8 = Sale.create!(order_id: order7.id, product_id: order7.product_id, sex: order7.sex, size: order7.size, date: Date.today.to_s.split('-').join('/'), active: 'true', price: order7.price)
sale9 = Sale.create!(order_id: order8.id, product_id: order8.product_id, sex: order8.sex, size: order8.size, date: Date.today.to_s.split('-').join('/'), active: 'true', price: order8.price)
sale10 = Sale.create!(order_id: order9.id, product_id: order9.product_id, sex: order9.sex, size: order9.size, date: Date.today.to_s.split('-').join('/'), active: 'true', price: order9.price)
sale11 = Sale.create!(order_id: order10.id, product_id: order10.product_id, sex: order10.sex, size: order10.size, date: Date.today.to_s.split('-').join('/'), active: 'true', price: order10.price)
