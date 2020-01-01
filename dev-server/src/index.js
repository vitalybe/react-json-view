'use strict';

//import react and reactDom for browser rendering
import React from 'react';
import ReactDom from 'react-dom';

import Moment from 'moment';

//import the react-json-view component (installed with npm)
import JsonViewer from './../../src/js/index';

//render 2 different examples of the react-json-view component
ReactDom.render(
    <div>
        {/* just pass in your JSON to the src attribute */}
        <JsonViewer
            sortKeys
            style={{ padding: '30px', backgroundColor: 'white' }}
            src={getExampleJson2()}
            collapseStringsAfterLength={2000}
            name={'root'}
            displayDataTypes={false}
            displayObjectSize={false}
            enableClipboard={false}
            allowExpand={false}
            highlights={
                [
                    { className: "level1", paths: [['root', 'array']] },
                    {
                        className: "level2",
                        paths: [['root', 'config', 'configValue'], ['root', 'config', 'innerConfig', 'innerConfigValue']]
                    },
                    { className: "level3", paths: [['root', 'config', 'innerConfig', 'innerConfigArray']] },
                    { className: "level4", paths: [] }
                ]
            }
        />
    </div>,
    document.getElementById('app-container')
);

/*-------------------------------------------------------------------------*/
/*     the following functions just contain test json data for display     */
/*-------------------------------------------------------------------------*/

//just a function to get an example JSON object
function getExampleJson1() {
    return {
        string: 'this is a test string',
        integer: 42,
        empty_array: [],
        empty_object: {},
        array: [1, 2, 3, 'test'],
        float: -2.757,
        undefined_var: undefined,
        parent: {
            sibling1: true,
            sibling2: false,
            sibling3: null,
            isString: value => {
                if (typeof value === 'string') {
                    return 'string';
                } else {
                    return 'other';
                }
            }
        },
        string_number: '1234',
        date: new Date(),
        moment: Moment(),
        regexp: /[0-9]/gi
    };
}

//and another a function to get an example JSON object
function getExampleJson2() {
    return {
        value: 5,
        array: [1, 2, 3],
        config: {
            configValue: 5,
            configArray: [1, 2, 3],
            innerConfig: {
                innerConfigValue: 5,
                innerConfigArray: [1, 2, 3]
            }
        }
    };
}

function getExampleJson3() {
    return {
        example_information:
            'this example has the collapsed prop set to true and the indentWidth prop is set to 8',
        default_collapsed: true,
        collapsed_array: [
            'you expanded me',
            'try collapsing and expanding the root node',
            'i will still be expanded',
            {
                leaf_node: true
            }
        ]
    };
}

function getExampleJson4() {
    const large_array = new Array(225).fill(
        'this is a large array full of items'
    );

    large_array.push(getExampleArray());

    large_array.push(new Array(75).fill(Math.random()));

    return large_array;
}

function getExampleArray() {
    return [
        'you can also display arrays!',
        new Date(),
        1,
        2,
        3,
        {
            pretty_cool: true
        }
    ];
}
