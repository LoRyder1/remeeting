require 'net/http'

url = 'https://www-dev.remeeting.com/webdev-quiz/consume.html'

# mykey = 'demo'
uri = URI(url)

request = Net::HTTP::Get.new(uri.path)

# request['Content-Type'] = 'application/xml'
# request['Accept'] = 'application/xml'
# request['X-OFFERSDB-API-KEY'] = mykey

p request

response = Net::HTTP.new(uri.host,uri.port) do |http|
  http.request(request)
end

puts response