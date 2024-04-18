from flask import Flask, render_template, redirect, url_for
import sqlite3
app = Flask(__name__)
sqldbname = 'Sporter.db'

@app.route('/')
def index():  # put application's code here
    return render_template('index.html')

# login
@app.route('/changeToLogin')
def changeToLogin():
    return render_template('login.html')

# hiển thị page detail
@app.route('/seeDetails')
def seeDetails():
    return render_template('returnAndExchange.html')

# chuyển hướng page áo câu lạc bộ
@app.route('/aoClb')
def aoClb():
    return render_template('aoCLB.html')

# lấy thông tin sản phẩm từ database và hiển thị
@app.route('/products')
def getDataProducts():
    conn = sqlite3.connect('Sporter.db')
    cursor = conn.cursor()

    if cursor.execute('SELECT * FROM products'):
        products = cursor.fetchall()
    else:
        return 'No products found'
    conn.close()

    return render_template('index.html', products=products)

# @app.route('/products', methods = ['GET'])
# def get_products():
#     conn = sqlite3.connect(sqldbname1)
#     cur = conn.cursor()
#     cur.execute("SELECT * FROM products")
#     products=cur.fetchall()
#     product_list = []
#     for product in products:
#         product_list.append({'id': product[0], 'title':product[1], 'price':product[2]})
#     return jsonify(product_list)

if __name__ == '__main__':
    app.run()
