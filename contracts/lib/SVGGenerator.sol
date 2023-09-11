pragma solidity ^0.8.0;

library SVGGenerator {
    // we may pass an array as @argument here as an argument
    // function generateSVG(string[] memory sentence) external pure returns (string memory){
    function generateSVG(string memory sentence) external pure returns (string memory) {
        
        // Working with sentences / sequences
        // string memory svg = string(abi.encodePacked(
        //     '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 600">',
        //     '<style>text { font-family: Arial; font-size: 12px; fill: black; text-anchor: middle; dominant-baseline: middle; }</style>',
        //     '<text x="50%" y="50%">'
        // ));

        // to be done character replacment ( )
        // here unciode to SVG
        // if (text contains  "\u2190" = \u2190) = <text> &#8592; </text>
        // if (text contains  "\u2B95" = \u2B95) = <text>&#8594; </text>)
        // if text contains (_ _)
        // if text contains `
        // if text contains \u2211 ( ∑ ) = <text>&sum;</text>

        // works with sentece ( like units )
        // for (uint256 i = 0; i < sentence.length; i++) {
        //     string memory tspan = string(abi.encodePacked(
        //         '<tspan x="50%" dy="', (i == 0) ? "-7em" : "1.5em", '">',
        //         sentence[i],
        //         '</tspan>'
        //     ));
        //     svg = string(abi.encodePacked(svg, tspan));
        // }
        // svg = string(abi.encodePacked(svg, '</text></svg>'));
        // works with sentece ( like units )

        // to work with nodewords
        
        string memory svgHeader = '<?xml version="1.0" encoding="UTF-8"?>'
            '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 600">'
            '<style>text { font-family: Arial; font-size: 17px; fill: black; text-anchor: middle; dominant-baseline: middle; }</style>'
            '<text x="50%" y="50%">';

        string memory tspan = string(abi.encodePacked(
            '<tspan x="50%" dy="-7em">', 
            sentence, 
            '</tspan>'
        ));

        string memory svgFooter = '</text></svg>';

        return string(abi.encodePacked(svgHeader, tspan, svgFooter));
        }
}