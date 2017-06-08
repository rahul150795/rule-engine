/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Colour blocks for Blockly.
 *
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.rule');  // Deprecated
goog.provide('Blockly.Constants.Rule');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 * This should be the same as Blockly.Msg.COLOUR_HUE.
 * @readonly
 */
Blockly.Constants.Rule.HUE = 20;
/** @deprecated Use Blockly.Constants.Colour.HUE */
Blockly.Blocks.rule.HUE = Blockly.Constants.Rule.HUE;

Blockly.defineBlocksWithJsonArray(

[{
  "type": "set_category",
  "message0": "Set %1 discount %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "Category 1",
          "1"
        ],
        [
          "Category 2",
          "2"
        ],
        [
          "Category 3",
          "3"
        ]
      ]
    },
    {
      "type": "field_number",
      "name": "discount",
      "value": 0
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "set_rule",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "p_category",
      "options": [
        [
          "category 1",
          "1"
        ],
        [
          "category 2",
          "2"
        ],
        [
          "category 3",
          "3"
        ]
      ]
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "product_name",
  "message0": "Product %1",
  "args0": [
    {
      "type": "field_input",
      "name": "p_name",
      "text": " name"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "product_price",
  "message0": "Product Price %1",
  "args0": [
    {
      "type": "field_number",
      "name": "p_price",
      "value": 100
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "product_category",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "category 1",
          "1"
        ],
        [
          "category 2",
          "2"
        ],
        [
          "category 3",
          "3"
        ]
      ]
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "p_off",
  "message0": "%1 %% off ",
  "args0": [
    {
      "type": "field_number",
      "name": "NAME",
      "value": 0
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "payment",
  "message0": "Payment %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "option",
      "options": [
        [
          "COD",
          "1"
        ],
        [
          "Online",
          "2"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "cart_item",
  "message0": "Add Item in cart %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "cart"
    }
  ],
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "set_catalog_rule",
  "message0": "set Catalog Rule %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "c_discount"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "cart_rules",
  "message0": "Set Cart Rule %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "cart_rule"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "multi_cond",
  "message0": "Rule 1 %1 Rule 2 %2",
  "args0": [
    {
      "type": "input_statement",
      "name": "con1"
    },
    {
      "type": "input_statement",
      "name": "con2"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "sum_block",
  "message0": "sum %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "sum"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "shipping_rule",
  "message0": "Set Shipping Rule %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "shipping"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
]
);