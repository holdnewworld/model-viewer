/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {MeshStandardMaterial} from 'three/src/materials/MeshStandardMaterial.js';
import {Color} from 'three/src/math/Color.js';

import {createFakeGLTF} from '../../test-helpers.js';

import {Material} from './material.js';
import {ModelGraft} from './model-graft.js';

suite('facade/three-js/material', () => {
  suite('Material', () => {
    test(
        'expresses Three.js material color as PBRMetallicRoughness base color factor',
        () => {
          const graft = new ModelGraft('', createFakeGLTF());
          const threeMaterial = new MeshStandardMaterial();

          threeMaterial.color = new Color('rgb(255, 127, 0)');

          const material = new Material(graft, threeMaterial);

          expect(material.pbrMetallicRoughness.baseColorFactor)
              .to.be.deep.equal([1, 127 / 255, 0, 1]);
        });
  });
});
