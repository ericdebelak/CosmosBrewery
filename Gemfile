source 'https://rubygems.org'

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "3.3.1"
gem 'kramdown', versions['kramdown']
gem 'rake'
