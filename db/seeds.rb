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

user1 = User.create(username: 'admin', name: 'John Doe', password: 'abc123', email: 'admin@site.com')
demo_user = User.create(username: 'demologin', name: 'Demo Man', password: 'demopassword', email: 'demo@demo.demo')
product1 = Product.create(name: 'Air Jordan 1 "Bred"', description: 'The Classic', style_code: 4281, colorway: 'black red', retail_price: 170, img_path: 'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/6/3/63611742962-air-jordan-1-retro-high-og-bred-black-varsity-red-white-011845_1.jpg', release_date: '3/9/2016')
product2 = Product.create(name: 'Air Jordan 3 "White Cement"', description: 'Also a classic', style_code: '136064-105', colorway: 'white fire red cement grey black', retail_price: 200, img_path: 'https://stockx-360.imgix.net/Air-Jordan-3-Retro-White-Cement-2011/Images/Air-Jordan-3-Retro-White-Cement-2011/Lv2/img01.jpg', release_date: '3/9/2016')
product3 = Product.create(name: 'Air Jordan 11 "Space Jams"', description: 'Your childhood', style_code: '378037-003', colorway: 'black dark concord white', retail_price: 220, img_path: 'https://stockx.imgix.net/Jordan-11-Retro-Space-Jams-2016-Product.jpg', release_date: '10/12/2016')

PortfolioItem.create(user_id: user1.id, product_id: product1.id, size: 'M 9', purchase_price: 1)
PortfolioItem.create(user_id: user1.id, product_id: product2.id, size: 'M 9', purchase_price: 1)
PortfolioItem.create(user_id: demo_user.id, product_id: product3.id, size: 'M 9', purchase_price: 1)

