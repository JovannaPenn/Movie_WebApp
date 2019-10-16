from flask import Flask, render_template, jsonify

import sqlite3
GENRESDB= 'genres.db'

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/genres', methods=['GET'])
def populargenres():
    return jsonify ('genres')
