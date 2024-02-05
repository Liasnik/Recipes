"use client";
import { ConfigProvider, Progress, Space } from "antd";
import { useReadingProgressBar } from "../hooks/useReadingProgressBar";

export default function CircleProgressBar() {
  const completion = useReadingProgressBar();

  return (
    <div className="fixed top-24 left-8  ">
      <ConfigProvider
        theme={{
          components: {
            Progress: {
              circleIconFontSize: "100px",
              lineBorderRadius: 0,
              circleTextFontSize: "1.1em",
            },
          },
          token: {
            colorText: "#7b87f0",
            colorSuccess: "#7b87f0",
          },
        }}
      >
        <Progress
          type="dashboard"
          percent={completion}
          strokeColor="#7b87f0"
          trailColor="#10164d"
          format={(percent) => `${percent?.toFixed()} %`}
          gapDegree={0}
          size={80}
        />
      </ConfigProvider>

      <Space></Space>
    </div>
  );
}
