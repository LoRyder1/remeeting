# // A sausage is a data structure that is the output format from remeeting's automatic speach recognition system. For
# // each segment of time, possible words/phrases are given with a weight between 0.0 - 1.0. The higher the weight,
# // the more likely that word was said by the speaker.
s = [
  {
    "speakerId": "abc", #// This first one is a simple test example. Running this through your function should return "I like you"
    "start": 0,
    "end": 3.14,
    "data": [
      {
        "start": 0,
        "end": 1.2,
        "words": {
          "I": 0.6, #// The value of key is the calculated likelyhood that key is the correct word
          "hi": 0.4
        }
      },
      {
        "start": 1.2,
        "end": 2.1,
        "words": {
          "like": 0.4,
          "lick": 0.3,
          "lake": 0.2,
          "hike": 0.1
        }
      },
      {
        "start": 1.2,
        "end": 3.1,
        "words": {
          "you": 1.0,
          "hue": 0.0,
          "lew": 0.0
        }
      }
    ]
  }
]

speaker = s[0][:data]
words = []
speaker.each do |word|
  words << word[:words].max_by{|k,v| v}[0].to_s
end
string = words.join(' ')
p string

<<-WHY


WHY


