import { NextPage } from "next";
import { useState } from "react";

import { ClearButton, CopyButton, PasteButton } from "../../components/button";
import { FileInputButton, TextArea, Toggle } from "../../components/io";
import {
  Configuration,
  SectionConfiguration,
  SectionHeader,
  SectionMain,
} from "../../components/section";
import Spacer, { VSpacerL, VSpacerM } from "../../components/Spacer";
import { IconConversion } from "../../data/icon";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";

// https://stackoverflow.com/a/30106551/8448791

const encode = (str: string) => {
  if (typeof window !== "undefined") {
    return window.btoa(
      encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
        return String.fromCharCode(parseInt(p1, 16));
      })
    );
  }
  return "";
};

const decode = (str: string) => {
  try {
    return decodeURIComponent(
      Array.prototype.map
        .call(window.atob(str), (c) => {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  } catch {
    return "";
  }
};

const Base64: NextPage = () => {
  const { t } = useLocale();

  const [input, setInput] = useState("");
  const [doEncode, setDoEncode] = useState(true);

  const output = doEncode ? encode(input) : decode(input);

  return (
    <MainLayout title={t.base64.title}>
      <SectionConfiguration title={t.common.configTitle}>
        <Configuration
          icon={IconConversion}
          title={t.base64.conversionTitle}
          desc={t.base64.conversionSubtitle}
        >
          <Toggle
            on={doEncode}
            onChange={setDoEncode}
            desc={t.base64.encodeDesc}
            onText={t.base64.encodeText}
            offText={t.base64.decodeText}
          />
        </Configuration>
      </SectionConfiguration>

      <VSpacerL />
      <SectionMain className="flex grow flex-col">
        <SectionHeader title={t.common.inputTitle} label="input">
          <PasteButton onClick={(text) => setInput(text)} />
          <Spacer x={6} />
          <FileInputButton onFileRead={setInput} />
          <Spacer x={6} />
          <ClearButton onClick={() => setInput("")} />
        </SectionHeader>
        <TextArea id="input" value={input} onChange={setInput} />
      </SectionMain>

      <VSpacerM />
      <SectionMain className="flex grow flex-col">
        <SectionHeader title={t.common.outputTitle} label="output">
          <CopyButton text={output} />
        </SectionHeader>
        <TextArea id="output" value={output} />
      </SectionMain>
    </MainLayout>
  );
};

export default Base64;
