from flask import Flask, render_template, redirect, url_for
import sqlite3
app = Flask(__name__)
sqldbname = 'Sporter.db'

# @app.route('/')
# def index():  # put application's code here
#     return render_template('index.html')

# login
@app.route('/changeToLogin')
def changeToLogin():
    return render_template('login.html')

# hiển thị page detail
@app.route('/seeDetails')
def seeDetails():
    return render_template('returnAndExchange.html')

@app.route('/ToMu')
def ToMu():
    return render_template('aoMUdo.html')
@app.route('/ToPsg')
def ToPsg():
    return render_template('aopsg.html')
@app.route('/ToMuGreen')
def ToMuGreen():
    return render_template('aomuxanh.html')
@app.route('/ToMuwg')
def ToMuwg():
    return render_template('aomutrangxanh.html')
@app.route('/ToArs')
def ToArs():
    return render_template('aoArsdo.html')
@app.route('/ToReal')
def ToReal():
    return render_template('aorealtrang.html')
@app.route('/ToJuve')
def ToJuve():
    return render_template('aoJuve.html')
@app.route('/ToArsYellow')
def ToArsYellow():
    return render_template('aoarsvang.html')
@app.route('/ToArsby')
def ToArsby():
    return render_template('arsvangden.html')
@app.route('/ToArsBlue')
def ToArsBlue():
    return render_template('arsxanh.html')
@app.route('/ToRealt')
def ToRealt():
    return render_template('aoReal.html')
@app.route('/ToChel')
def ToChel():
    return render_template('chel.html')

# chuyển hướng page áo câu lạc bộ
@app.route('/aoClb')
def aoClb():
    conn = sqlite3.connect('Sporter.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM products WHERE id <= 12')
    products = cursor.fetchall()
    conn.close()
    return render_template('aoCLB.html', products=products)

# lấy thông tin sản phẩm từ database và hiển thị
@app.route('/')
def getDataProducts():
    conn = sqlite3.connect('Sporter.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM products WHERE id <= 4 ')
    products = cursor.fetchall()
    conn.close()

    return render_template('index.html', products=products)


if __name__ == '__main__':
    app.run(debug =True)
