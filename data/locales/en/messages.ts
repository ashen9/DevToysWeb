import { FormatOptions } from "sql-formatter";

import { optionValues } from "../../optionValues";

export const t = {
  common: {
    allToolsTitle: "All tools",
    configTitle: "Configuration",
    inputTitle: "Input",
    outputTitle: "Output",
    copyTitle: "Copy",
    pasteTitle: "Paste",
    clearTitle: "Clear",
    openFiletitle: "Load a file",
    previewTitle: "Preview",
    notFoundTitle: "Not found",
    notFoundDesc: "The page you are looking for does not exist.",
    orText: "or",
    browseFilesText: "Browse files",
  },
  base64: {
    title: "Base 64 Encoder / Decoder",
    conversionTitle: "Conversion",
    conversionSubtitle: "Select which conversion mode you want to use",
    encodeDesc: "Encode the input",
    encodeText: "Encode",
    decodeText: "Decode",
  },
  checksum: {
    title: "Checksum Generator",
    uppercaseTitle: "Uppercase",
    uppercaseDesc: "Convert the output to uppercase",
    hashingAlgorithmTitle: "Hashing Algorithm",
    hachingAlgorithmDesc: "Select which hashing algorithm you want to use",
    hashingAlgorithmOptions: [
      { name: "MD5", value: optionValues.checksum.hashingAlgorithm.md5 },
      { name: "SHA1", value: optionValues.checksum.hashingAlgorithm.sha1 },
      { name: "SHA256", value: optionValues.checksum.hashingAlgorithm.sha256 },
      { name: "SHA384", value: optionValues.checksum.hashingAlgorithm.sha384 },
      { name: "SHA512", value: optionValues.checksum.hashingAlgorithm.sha512 },
    ],
    dragAndDropTitle: "Drag & drop any file here",
  },
  gzip: {
    title: "GZip Compress / Decompress",
    compressTitle: "GZip Compress/Decompress",
    compressDesc:
      "Select whether the input should be compressed or decompressed",
    compressText: "Compress",
    decompressText: "Decompress",
  },
  hash: {
    title: "Hash Generator",
    uppercaseTitle: "Uppercase",
    uppercaseDesc: "Convert the output to uppercase",
    md5Title: "MD5",
    sha1Title: "SHA1",
    sha256Title: "SHA256",
    sha512Title: "SHA512",
  },
  html: {
    title: "HTML Encoder / Decoder",
    conversionTitle: "Conversion",
    conversionSubtitle: "Select which conversion mode you want to use",
    encodeDesc: "Encode the input",
    encodeText: "Encode",
    decodeText: "Decode",
  },
  inspectorCaseConverter: {
    title: "Text Case Converter and Inspector",
    convertTitle: "Convert",
    originalTextTitle: "Original text",
    sentenceCaseTitle: "Sentence case",
    lowerCaseTitle: "lower case",
    upperCaseTitle: "UPPER CASE",
    titleCaseTitle: "Title Case",
    camelCaseTitle: "camelCase",
    pascalCaseTitle: "PascalCase",
    snakeCaseTitle: "snake_case",
    constantCaseTitle: "CONSTANT_CASE",
    kebabCaseTitle: "kebab-case",
    cobolCaseTitle: "COBOL-CASE",
    trainCaseTitle: "Train-Case",
    alternatingCaseTitle: "aLtErNaTiNg cAsE",
    inverseCaseTitle: "InVeRsE CaSe",
    stringTitle: "String",
    selectionTitle: "Selection",
    lineTitle: "Line:",
    columnTitle: "Column:",
    positionTitle: "Position:",
    statisticsTitle: "Statistics",
    charactersTitle: "Characters:",
    wordsTitle: "Words:",
    linesTitle: "Lines:",
    sentencesTitle: "Sentences:",
    paragraphsTitle: "Paragraphs:",
    bytesTitle: "Bytes:",
    wordDistributionTitle: "Word distribution",
    characterDistributionTitle: "Character distribution",
  },
  json: {
    title: "JSON Formatter",
    indentTitle: "Indentation",
    indentOptions: [
      { name: "2 spaces", value: optionValues.json.indent.twoSpaces },
      { name: "4 spaces", value: optionValues.json.indent.fourSpaces },
      { name: "1 tab", value: optionValues.json.indent.oneTab },
      { name: "minified", value: optionValues.json.indent.minify },
    ],
  },
  jsonYaml: {
    title: "JSON <> YAML Converter",
    conversionTitle: "Conversion",
    conversionSubtitle: "Select which conversion mode you want to use",
    conversionOptions: [
      {
        name: "JSON to YAML",
        value: optionValues.jsonYaml.conversion.jsonToYaml,
      },
      {
        name: "YAML to JSON",
        value: optionValues.jsonYaml.conversion.yamlToJson,
      },
    ],
    indentTitle: "Indentation",
    indentOptions: [
      { name: "2 spaces", value: optionValues.jsonYaml.indent.twoSpaces },
      { name: "4 spaces", value: optionValues.jsonYaml.indent.fourSpaces },
    ],
  },
  jwtDecoder: {
    title: "JWT Decoder",
    jwtTokenTitle: "JWT Token",
    headerTitle: "Header",
    payloadTitle: "Payload",
  },
  loremIpsum: {
    title: "Lorem Ipsum Generator",
    typeTitle: "Type",
    typeSubtitle: "Generate words, sentences or paragraphs of Lorem Ipsum",
    lengthTitle: "Length",
    lengthSubtitle: "Number of words, sentences or paragraphs to generate",
    typeOptions: [
      { name: "Words", value: optionValues.loremIpsum.type.words },
      { name: "Sentences", value: optionValues.loremIpsum.type.sentences },
      { name: "Paragraphs", value: optionValues.loremIpsum.type.paragraphs },
    ],
  },
  markdownPreview: {
    title: "Markdown Preview",
    themeTitle: "Theme",
    themeSubtitle: "Select which theme to use to preview the Markdown",
    themeOptions: [
      { name: "Light", value: "light" },
      { name: "Dark", value: "dark" },
    ],
  },
  numberBase: {
    title: "Number Base Converter",
    formatNumberTitle: "Format number",
    formatNumberDesc: "Format the result",
    inputTypeTitle: "Input type",
    inputTypeSubtitle: "Select which Input type you want to use",
    hexTitle: "Hexadecimal",
    decimalTitle: "Decimal",
    octalTitle: "Octal",
    binaryTitle: "Binary",
    baseOptions: [
      { name: "Octal", value: optionValues.numberBase.base.octal },
      { name: "Binary", value: optionValues.numberBase.base.binary },
      { name: "Decimal", value: optionValues.numberBase.base.decimal },
      { name: "Hexadecimal", value: optionValues.numberBase.base.hex },
    ],
  },
  search: {
    resultTitle: 'Search results for "{{0}}"',
    noResultTitle: "No results found",
    inputPlaceholder: "Type to search for tools...",
  },
  settings: {
    title: "Settings",
    languageTitle: "Language",
    themeTitle: "App Theme",
    themeSubtitle: "Select which app theme to display",
    themeOptions: [
      { name: "Light", value: optionValues.settings.theme.light },
      { name: "Dark", value: optionValues.settings.theme.dark },
    ],
    textEditorTitle: "Text editor",
    wrapWordTitle: "Wrap word",
    lineNumbersTitle: "Line numbers",
    lineNumbersDesc: "Display line numbers in the text editor",
    highlightCurrentLineTitle: "Highlight current line",
    highlightCurrentLineDesc:
      "Change the background color of the current line so it's more visible",
    renderWhiteSpaceTitle: "Render white space",
  },
  sql: {
    title: "SQL Formatter",
    languageTitle: "Language",
    languageOptions: [
      { name: "Db2", value: optionValues.sql.language.db2 },
      { name: "MariaDB", value: optionValues.sql.language.mariadb },
      { name: "MySQL", value: optionValues.sql.language.mysql },
      { name: "N1QL", value: optionValues.sql.language.n1ql },
      { name: "PL/SQL", value: optionValues.sql.language.plsql },
      { name: "PostgreSQL", value: optionValues.sql.language.postgresql },
      { name: "AmazonRedshift", value: optionValues.sql.language.redshift },
      { name: "Spark SQL", value: optionValues.sql.language.spark },
      { name: "Standard SQL", value: optionValues.sql.language.standard },
      { name: "Transact-SQL", value: optionValues.sql.language.tsql },
    ] as { name: string; value: FormatOptions["language"] }[],
    indentTitle: "Indentation",
    indentOptions: [
      { name: "2 spaces", value: optionValues.sql.indent.twoSpaces },
      { name: "4 spaces", value: optionValues.sql.indent.fourSpaces },
    ],
  },
  url: {
    title: "URL Encoder / Decoder",
    conversionTitle: "Conversion",
    conversionSubtitle: "Select which conversion mode you want to use",
    encodeDesc: "Encode the input",
    encodeText: "Encode",
    decodeText: "Decode",
  },
  uuid: {
    title: "UUID Generator",
    hyphenateTitle: "Hyphens",
    hyphenateDesc: "Add hyphens to the output",
    uppercaseTitle: "Uppercase",
    uppercaseDesc: "Convert the output to uppercase",
    uuidVersionTitle: "UUID Version",
    uuidVersionSubtitle: "Choose the version of UUID to generate",
    generateTitle: "Generate",
    generateButtonText: "Generate UUID(s)",
    versionOptions: [
      { name: "1", value: optionValues.uuid.version.v1 },
      { name: "4 (GUID)", value: optionValues.uuid.version.v4 },
    ],
  },
  xml: {
    title: "XML Formatter",
    indentTitle: "Indentation",
    indentOptions: [
      { name: "2 spaces", value: optionValues.xml.indent.twoSpaces },
      { name: "4 spaces", value: optionValues.xml.indent.fourSpaces },
    ],
  },
};
