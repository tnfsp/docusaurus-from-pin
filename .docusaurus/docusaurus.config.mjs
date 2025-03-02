/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "春熊の心臟醫學",
  "tagline": "心臟外科醫師的挑戰與修練",
  "favicon": "img/favicon1.png",
  "url": "https://wilsonchao.com",
  "baseUrl": "/",
  "onBrokenLinks": "warn",
  "onBrokenMarkdownLinks": "warn",
  "i18n": {
    "defaultLocale": "zh-TW",
    "locales": [
      "zh-TW"
    ],
    "path": "i18n",
    "localeConfigs": {}
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "routeBasePath": "/",
          "sidebarPath": "/workspaces/docusaurus-from-pin/sidebars.js",
          "editUrl": "https://github.com/tnfsp/docusaurus-from-pin/edit/master/",
          "showLastUpdateTime": true
        },
        "blog": false,
        "theme": {
          "customCss": "/workspaces/docusaurus-from-pin/src/css/custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "algolia": {
      "contextualSearch": true,
      "appId": "J2BVI05PDX",
      "apiKey": "b666b8ea7267e3a15a0e978d105f4af3",
      "indexName": "wilsonchao",
      "externalUrlRegex": "external\\.com|domain\\.com",
      "replaceSearchResultPathname": {
        "from": "/docs/",
        "to": "/"
      },
      "searchParameters": {},
      "searchPagePath": "search"
    },
    "metadata": [
      {
        "name": "keywords",
        "content": "心臟外科、重症醫學、心臟超音波"
      }
    ],
    "image": "img/favicon1.png",
    "navbar": {
      "title": "春熊の心臟醫學",
      "logo": {
        "alt": "春熊の心臟醫學",
        "src": "img/favicon1.png"
      },
      "items": [
        {
          "to": "/blog",
          "position": "left",
          "label": "文章 Blog"
        },
        {
          "to": "/snapshot",
          "position": "left",
          "label": "短想法 Snapshots"
        },
        {
          "to": "/collection",
          "position": "left",
          "label": "蒐集 Collection"
        },
        {
          "type": "search",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Contact",
          "items": [
            {
              "label": "Twitter",
              "href": "https://twitter.com/hsiang0401"
            },
            {
              "label": "Instagram",
              "href": "https://www.instagram.com/momobear_doctor/"
            },
            {
              "label": "Facebook",
              "href": "https://facebook.com/momobeardoctor"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2023 春熊の心臟醫學"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "plugins": [],
  "themes": [],
  "scripts": [],
  "headTags": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "mermaid": false
  }
};
