

# 1. Consume

# As a Remeeting front-end developer, you'll be consuming the Remeeting API, along with third party API's, on a daily basis. Your task is to update the consume.html page so that it finds the quiz user's oldest meeting, and plays its audio_stereo.m4a in an html5 video element.
# The following resources should help you get started.
# API wiki
# consume.html



require 'httparty'
require 'json'
require 'pp'

class ConsumeController < ApplicationController

  def consume
    user, headers = "Bearer nGVhDpbr2wjs8FgsecMXHpdJ", {"Content-Type" => "application/json", "Authorization" => user}
    # 1. Find oldest meeting of user
    meetings = "https://api-dev.remeeting.com/v0.3/meeting/"
    res = HTTParty.get(meetings, :headers => headers)
    body = JSON.parse(res.body)

    min_data, min_time = body["Meetings"][0]["AssociatedAudios"], body["Meetings"][0]["MeetingDateTime"]

    body["Meetings"].each do |meeting|
      if meeting["MeetingDateTime"] < min_time
        min_data, min_time = meeting["AssociatedAudios"], meeting["MeetingDateTime"]
      end
    end

    # can not find meeting data for key: 9 which is the oldest meeting
    # default = d
    # audios = "https://api-dev.remeeting.com/v0.3/meeting/data/" + min_data[0] + "/"
    audios = "https://api-dev.remeeting.com/v0.3/meeting/data/d/"
    res2 = HTTParty.get(audios, :headers => headers)
    body2 = JSON.parse(res2.body)

    path = ""

    body2["path"].each do |x|
      path = x if x.end_with? ".m4a"
    end
    path[0] = ""
    s3 = audios + path

    res3 = HTTParty.get(s3, :headers => {"Authorization" => user})
    s3_presigned_url = JSON.parse(res3.body)

    @loc = s3_presigned_url["location"]
  end

  



end


