

function CustomToolTip({ active, payload }: { active: any, payload: any }) {
  if (!active || !payload || !payload.length) return null;

  const data = payload[0];

  return (
    <div className="rounded-md bg-[#111] px-3 py-2 shadow text-white text-sm border border-[#333]">
      <div><b>Value:</b> {data.value}</div>
    </div>
  );
}
