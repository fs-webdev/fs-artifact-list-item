module.exports = {
  "plugins": {
    "istanbul": {
      "dir": "./coverage",
      "reporters": [
        "text-summary", "lcov"
      ],
      "exclude": [],
      "include": [
        "**/birch-artifact-list-item.html"
      ]
    }
  }
}