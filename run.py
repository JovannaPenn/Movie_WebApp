from flask import Flask, render_template, jsonify

import sqlite3
GENRESDB= 'genres.db'

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/action', methods=['GET'])
def action():
    con = sqlite3.connect (GENRESDB)
    cur = con.execute('SELECT * FROM action')

    for row in cur:
        action.append(list(row))
    con.close()
    return jsonify(action)
