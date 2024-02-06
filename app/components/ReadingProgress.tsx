"use client";
import { Progress } from "antd";
import { useReadingProgressBar } from "../hooks/useReadingProgressBar";

export default function ReadingProgress() {
  const completion = useReadingProgressBar();

  return (
    <div className="fixed top-[45px] w-full h-3">
      <Progress percent={completion} showInfo={false} strokeColor="#7b87f0" />
    </div>
  );
}
