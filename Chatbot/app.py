# from crypt import methods
from flask import Flask, render_template, request
from chatbot import predict_class, get_response, intents
from time import sleep

app = Flask(__name__)
app.config['SECRET__KEY'] = 'a_very_secretive_key_123456789'
answer_list = []
delay = sleep(1)

@app.route("/")
def home():
    global answer_list
    answer_list.clear()
    return render_template("index.html")

@app.route("/chatbot", methods=["GET", "POST"])
def chatbot():
  global answer_list, delay
  if len(answer_list)>=5:
    answer_list.pop(0)
  if request.method == "POST":
    message = request.form['message']
    ints = predict_class(message)
    response = get_response(ints, intents)
    answer_list.append(response)
    print(answer_list)
  return render_template("chatbot.html", message="", answer_list=answer_list, delay=delay)

if __name__ == "__main__":
  app.debug = True
  app.run()

      # del answer_list[-1]
      # answer_list = answer_list[1:]
      # answer_list.clear()
      # answer_list.remove(answer_list[0])
      # answer_list.pop(0)