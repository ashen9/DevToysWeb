import { NextPage } from "next";
import { useState } from "react";

import { Select, SplitEditor } from "../../components/io";
import {
  Configuration,
  SectionConfiguration,
  SectionMain,
} from "../../components/section";
import { VSpacerM } from "../../components/Spacer";
import { IconIndentation, IconLanguage } from "../../data/icon";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";
import { formatSql } from "../../lib/format";

const Sql: NextPage = () => {
  const { t } = useLocale();

  const [input, setInput] = useState("");
  const [language, setLanguage] = useState(t.sql.languageOptions[8]);
  const [indent, setIndent] = useState(t.sql.indentOptions[0]);

  const output = formatSql(input, language.value, indent.value);

  return (
    <MainLayout title={t.sql.title}>
      <SectionConfiguration title={t.common.configTitle}>
        <Configuration icon={IconLanguage} title={t.sql.languageTitle}>
          <div className="w-40">
            <Select
              options={t.sql.languageOptions}
              value={language}
              onChange={setLanguage}
            />
          </div>
        </Configuration>
        <Configuration icon={IconIndentation} title={t.sql.indentTitle}>
          <div className="w-32">
            <Select
              options={t.sql.indentOptions}
              value={indent}
              onChange={setIndent}
            />
          </div>
        </Configuration>
      </SectionConfiguration>

      <VSpacerM />
      <SectionMain className="grow">
        <SplitEditor
          input={input}
          setInput={setInput}
          output={output ?? ""}
          inputLanguage="sql"
          outputLanguage="sql"
        />
      </SectionMain>
    </MainLayout>
  );
};

export default Sql;
