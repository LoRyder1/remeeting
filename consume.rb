require 'net/http'
require 'open-uri'
require 'pry'
require 'rubygems'
require 'httparty'
require 'json'
require 'pp'

# 1. Consume

# As a Remeeting front-end developer, you'll be consuming the Remeeting API, along with third party API's, on a daily basis. Your task is to update the consume.html page so that it finds the quiz user's oldest meeting, and plays its audio_stereo.m4a in an html5 video element.
# The following resources should help you get started.
# API wiki
# consume.html

# res = Net::HTTP.get_response(uri)
# curl -H "Content-Type: application/json" -H "Authorization: Bearer nGVhDpbr2wjs8FgsecMXHpdJ" https://api-dev.remeeting.com/v0.3/meeting/

# // Reminders on the task:
#     //   1. Use the Remeeting API and wiki at https://bitbucket.org/remeeting/mrp-api/wiki and https://api-dev.remeeting.com/v0.3
#       //      a. Authorization - user authentication and resource authorization is done via a token that is sent as a header.
#       //         To get you started the test user's token is  nGVhDpbr2wjs8FgsecMXHpdJ .
#     //      b. To access resources, in this case a user's meetings, you could use command-line tool as follows:
#     //         curl -H "Content-Type: application/json" -H "Authorization: Bearer nGVhDpbr2wjs8FgsecMXHpdJ" https://api-dev.remeeting.com/v0.3/meeting/
#     //   2. Find the quiz user's oldest meeting and get a presigned S3 url for audio_stereo.m4a
#     //      - Don't try to read and understand all of the docs, that'd be overwhelming!
#     //          The important parts are 'Endpoints and HTTP Verbs - Get /{resource}/' which will help you get the oldest meeting,
#     //        and 'Access to S3 data resources - Get /{resource}/data/$resid/$path' which will help you get the s3 presigned url
#     //   3. Use a html5 video element on this page to play the audio_stereo.m4a
#     //

# /meeting/data/abc/filename.json => { location: "https://mrp-...." }  


url = "https://www-dev.remeeting.com/webdev-quiz/consume.html"
meetingurl = "https://api-dev.remeeting.com/v0.3/meeting/"
audiourl = "https://api-dev.remeeting.com/v0.3/audio/"
ad = "https://api-dev.remeeting.com/v0.3/audio/data/a"

s3 = "https://api-dev.remeeting.com/v0.3/audio/data/d/sw_4547_downmixed_audio_stereo.m4a/"
# s3 = "https://api-dev.remeeting.com/v0.3/meeting/data/d/sw_4547_downmixed.xml/"


user = "Bearer nGVhDpbr2wjs8FgsecMXHpdJ"
headers = {"Content-Type" => "application/json", "Authorization" => user}
# headers = {"Authorization" => user}
# add Headers to http request
# response = HTTParty.get(meetingurl, :headers => headers)
# response = HTTParty.get(audiourl, :headers => headers)
response = HTTParty.get(s3, :headers => headers)
body = response.body
# p body
# parse JSON
my_hash = JSON.parse(body)

# use access token
pp my_hash
# pp my_hash["Meetings"][0]

# p my_hash["Meetings"]
# pp my_hash["Meetings"][0]

# times = []
# my_hash["Meetings"].each do |meeting|
#   datetime = meeting["MeetingDateTime"]
#   times << datetime
#   # p DateTime.parse(datetime)
# end


# pp times
# p times.sort
# p times.max
# p times.min

# # p my_hash["Meetings"][0]["MeetingDateTime"]

# # puts response.body, response.code, response.message, response.headers.inspect



