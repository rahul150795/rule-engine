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
  "type": "env",
  "message0": "Live %1 Staging %2",
  "args0": [
    {
      "type": "field_checkbox",
      "name": "live",
      "checked": true
    },
    {
      "type": "field_checkbox",
      "name": "staging",
      "checked": true
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "itemcondition",
  "message0": "Item Condition %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "ordercondition",
  "message0": "Order Condition %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "discounttype",
  "message0": "Discount type %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "discountvalue",
  "message0": "Discount Value %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "maximumoff",
  "message0": "Maximum Off %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "addcartitem",
  "message0": "Add item in cart %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "catalogrule",
  "message0": "Set catalog Rule %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "cartrule",
  "message0": "Set Cart Rule %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "price",
  "message0": "Price %1",
  "args0": [
    {
      "type": "field_number",
      "name": "NAME",
      "value": 0
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "brand",
  "message0": "Brand %1",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "--------"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rulename",
  "message0": "Rule Name %1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "rule1"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "discount_type",
  "message0": "Fixed %1 Percent %2",
  "args0": [
    {
      "type": "field_checkbox",
      "name": "fixed",
      "checked": true
    },
    {
      "type": "field_checkbox",
      "name": "NAME",
      "checked": true
    }
  ],
  "output": null,
  "colour": 195,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "category",
  "message0": "Category %1",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "--------"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "category",
  "message0": "Category %1",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "--------"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "definition",
  "message0": "Rule Definition %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rule_implementation",
  "message0": "Rule Implementation %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]);