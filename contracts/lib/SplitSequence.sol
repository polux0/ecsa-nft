pragma solidity ^0.8.4;

library SplitSequence {
    function splitSentence(string memory sentence, uint256 maxLineLength) internal returns (string[] memory) {
        bool containsNewLines = containsPattern(sentence, "\\n");

        if (containsNewLines) {
            return splitByPattern(sentence, "\\n");
        }

        string[] memory words = splitByPattern(sentence, " ");
        string[] memory lines = new string[](words.length);
        string memory currentLine = "";

        uint256 lineIndex = 0;
        for (uint256 i = 0; i < words.length; i++) {
            string memory word = words[i];

            if (bytes(currentLine).length + bytes(word).length + 1 > maxLineLength) {
                lines[lineIndex] = currentLine;
                currentLine = word;
                lineIndex++;
            } else {
                if (bytes(currentLine).length > 0) {
                    currentLine = string(abi.encodePacked(currentLine, " "));
                }
                currentLine = string(abi.encodePacked(currentLine, word));
            }
        }

        if (bytes(currentLine).length > 0) {
            lines[lineIndex] = currentLine;
            lineIndex++;
        }

        return resizeArray(lines, lineIndex);
    }

    function containsPattern(string memory data, string memory pattern) private pure returns (bool) {
        bytes memory dataBytes = bytes(data);
        bytes memory patternBytes = bytes(pattern);
        uint256 dataLength = dataBytes.length;
        uint256 patternLength = patternBytes.length;

        for (uint256 i = 0; i < dataLength - patternLength + 1; i++) {
            bool isMatch = true;
            for (uint256 j = 0; j < patternLength; j++) {
                if (dataBytes[i + j] != patternBytes[j]) {
                    isMatch = false;
                    break;
                }
            }
            if (isMatch) {
                return true;
            }
        }

        return false;
    }

    function splitByPattern(string memory data, string memory pattern) private returns (string[] memory) {
        bytes memory dataBytes = bytes(data);
        bytes memory patternBytes = bytes(pattern);
        uint256 dataLength = dataBytes.length;
        uint256 patternLength = patternBytes.length;
        uint256 count = 0;

        for (uint256 i = 0; i < dataLength - patternLength + 1; i++) {
            bool isMatch = true;
            for (uint256 j = 0; j < patternLength; j++) {
                if (dataBytes[i + j] != patternBytes[j]) {
                    isMatch = false;
                    break;
                }
            }
            if (isMatch) {
                count++;
            }
        }

        string[] memory result = new string[](count + 1);
        uint256 index = 0;
        uint256 startIndex = 0;

        for (uint256 i = 0; i < dataLength - patternLength + 1; i++) {
            bool isMatch = true;
            for (uint256 j = 0; j < patternLength; j++) {
                if (dataBytes[i + j] != patternBytes[j]) {
                    isMatch = false;
                    break;
                }
            }
            if (isMatch) {
                result[index] = substring(data, startIndex, i);
                index++;
                startIndex = i + patternLength;
            }
        }

        result[index] = substring(data, startIndex, dataLength);
        return result;
    }

    function resizeArray(string[] memory array, uint256 newSize) private pure returns (string[] memory) {
        string[] memory resizedArray = new string[](newSize);
        for (uint256 i = 0; i < newSize; i++) {
            resizedArray[i] = array[i];
        }
        return resizedArray;
    }
    function substring(string memory str, uint startIndex, uint endIndex) private returns (string memory) {
        bytes memory strBytes = bytes(str);
        bytes memory result = new bytes(endIndex-startIndex);
        for(uint i = startIndex; i < endIndex; i++) {
            result[i-startIndex] = strBytes[i];
        }
    return string(result);
}
}
