# from crypt import methods
from flask import Flask, render_template, request
from chatbot import predict_class, get_response, intents
from time import sleep

app = Flask(__name__)
app.config['SECRET__KEY'] = 'a_very_secretive_key_123456789'
answer_list = []                            
delay = sleep(0.03)

@app.route("/")
def home():
    global answer_list
    answer_list.clear()
    return render_template("index.html")


@app.route("/chatbot", methods=["GET", "POST"])
def chatbot():
    global answer_list, delay
    if request.method == "POST":
        message = request.form['message']
        ints = predict_class(message)
        response = get_response(ints, intents)
        answer_list.append(response)
        print(answer_list)
        if len(answer_list) > 4:
            answer_list.remove(answer_list[0])
        return render_template("chatbot.html", message=message, answer_list=answer_list, delay=delay)
    return render_template("chatbot.html", message="", answer_list=answer_list)


if __name__ == "__main__":
    app.run(debug=True)