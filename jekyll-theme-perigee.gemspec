# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-perigee"
  spec.version       = "0.1.0"
  spec.authors       = ["Denis Danilevskiy"]
  spec.summary       = "A multilingual Jekyll theme for blogs and portfolios, inspired by the Gravity UI design system."
  spec.homepage      = "https://github.com/danilevsky/jekyll-theme-perigee"
  spec.license       = "MIT"

  spec.metadata = {
    "source_code_uri"   => spec.homepage,
    "bug_tracker_uri"   => "#{spec.homepage}/issues",
    "changelog_uri"     => "#{spec.homepage}/blob/main/CHANGELOG.md",
    "plugin_type"       => "theme",
  }

  spec.files = Dir.glob("{_layouts,_includes,_sass,assets}/**/*", File::FNM_DOTMATCH)
                  .concat(Dir.glob("_data/i18n/*.yml"))
                  .concat(%w(LICENSE NOTICE README.md))
                  .select { |f| File.file?(f) }

  spec.required_ruby_version = ">= 3.0"

  spec.add_runtime_dependency "jekyll", ">= 4.3", "< 5.0"
end
