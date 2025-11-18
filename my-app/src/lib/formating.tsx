export function formatMeaning(text:string) {
  if (!text) return null;

  // Extract meanings
  const englishMeaning = text.match(/English Meaning:(.*?)(Malayalam Meaning:|Examples:|$)/s)?.[1]?.trim();
  const malMeaning = text.match(/Malayalam Meaning:(.*?)(Examples:|$)/s)?.[1]?.trim();

  // Extract example block
  const examplesRaw = text.match(/Examples:(.*)$/s)?.[1]?.trim();

  // Parse examples (English + Malayalam pairs)
  let examples = [];
  if (examplesRaw) {
    const parts = examplesRaw.split(/\d\./).filter(Boolean);

    parts.forEach((block) => {
      const eng = block.match(/English:(.*?)(Malayalam:|$)/s)?.[1]?.trim();
      const mal = block.match(/Malayalam:(.*)$/s)?.[1]?.trim();
      if (eng && mal) examples.push({ eng, mal });
    });
  }

  return (
    <div className="space-y-4">

      {/* English Meaning */}
      {englishMeaning && (
        <div>
          <p className="font-semibold text-blue-700">✨ English Meaning:</p>
          <p className="text-gray-800">{englishMeaning}</p>
        </div>
      )}

      {/* Malayalam Meaning */}
      {malMeaning && (
        <div>
          <p className="font-semibold text-green-700">🌿 Malayalam Meaning:</p>
          <p className="text-gray-800">{malMeaning}</p>
        </div>
      )}

      {/* Examples */}
      {examples.length > 0 && (
        <div>
          <p className="font-semibold text-orange-700">📝 Examples:</p>

          <div className="space-y-3">
            {examples.map((ex, i) => (
              <div key={i}>
                <p className="font-medium">Example {i + 1}:</p>

                {/* English sentence */}
                <p className="text-gray-900 ml-3">{ex.eng}</p>

                {/* Malayalam sentence BELOW English */}
                <p className="text-gray-700 ml-3">{ex.mal}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
