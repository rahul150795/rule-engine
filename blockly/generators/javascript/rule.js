/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview Generating JavaScript for list blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.JavaScript.rule');

goog.require('Blockly.JavaScript');



Blockly.JavaScript['product'] = function(block) {
  var value_p_name = Blockly.JavaScript.valueToCode(block, 'p_name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_p_price = Blockly.JavaScript.valueToCode(block, 'p_price', Blockly.JavaScript.ORDER_ATOMIC);
  var value_p_category = Blockly.JavaScript.valueToCode(block, 'p_category', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['product_name'] = function(block) {
  var text_p_name = block.getFieldValue('p_name');
  // TODO: Assemble JavaScript into code variable.
  var code = text_p_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['product_price'] = function(block) {
  var number_p_price = block.getFieldValue('p_price');
  // TODO: Assemble JavaScript into code variable.
  var code = number_p_price;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['product_category'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['set_rule'] = function(block) {
  var dropdown_p_category = block.getFieldValue('p_category');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_p_category;
  // TODO: Chang ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['p_off'] = function(block) {
  var number_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = number_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['payment'] = function(block) {
  var dropdown_option = block.getFieldValue('option');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_option;
  return code;
};

Blockly.JavaScript['cart_item'] = function(block) {
  var statements_cart = Blockly.JavaScript.statementToCode(block, 'cart');
  // TODO: Assemble JavaScript into code variable.
  var code = statements_cart;
  return code;
};
Blockly.JavaScript['set_catalog_rule'] = function(block) {
  var statements_c_discount = Blockly.JavaScript.statementToCode(block, 'c_discount');
  // TODO: Assemble JavaScript into code variable.
  var code = statements_c_discount;
  return code;
};

Blockly.JavaScript['cart_rules'] = function(block) {
  var statements_cart_rule = Blockly.JavaScript.statementToCode(block, 'cart_rule');
  // TODO: Assemble JavaScript into code variable.
  var code = statements_cart_rule;
  return code;
};

Blockly.JavaScript['multi_cond'] = function(block) {
  var statements_con1 = Blockly.JavaScript.statementToCode(block, 'con1');
  var statements_con2 = Blockly.JavaScript.statementToCode(block, 'con2');
  // TODO: Assemble JavaScript into code variable.
  var code = statements_con1+statements_con2;
  return code;
};

Blockly.JavaScript['sum_block'] = function(block) {
  var statements_sum = Blockly.JavaScript.statementToCode(block, 'sum');
  // TODO: Assemble JavaScript into code variable.
  var code = statements_sum;
  return code;
};

Blockly.JavaScript['shipping_rule'] = function(block) {
  var statements_shipping = Blockly.JavaScript.statementToCode(block, 'shipping');
  // TODO: Assemble JavaScript into code variable.
  var code = statements_shipping;
  return code;
};