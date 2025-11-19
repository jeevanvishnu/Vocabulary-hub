export function formatMeaning(text: string) {
  if (!text) return null;

  // Remove all <br> tags from the text
  const cleanText = text.replace(/<br\s*\/?>/gi, '');

  // Extract meanings
  const englishMeaning = cleanText.match(/English Meaning:(.*?)(?=Malayalam Meaning:|Examples:|$)/s)?.[1]?.trim();
  const malMeaning = cleanText.match(/Malayalam Meaning:(.*?)(?=Examples:|$)/s)?.[1]?.trim();

  // Extract example block
  const examplesRaw = cleanText.match(/Examples:(.*)$/s)?.[1]?.trim();

  // Parse examples (English + Malayalam pairs)
  const examples: { eng: string; mal: string }[] = [];
  if (examplesRaw) {
    const parts = examplesRaw.split(/\d+\./).filter(Boolean);

    parts.forEach((block) => {
      const eng = block.match(/English:(.*?)(?=Malayalam:|$)/s)?.[1]?.trim();
      const mal = block.match(/Malayalam:(.*)$/s)?.[1]?.trim();
      if (eng && mal) {
        examples.push({ 
          eng: eng.replace(/<br\s*\/?>/gi, ''), 
          mal: mal.replace(/<br\s*\/?>/gi, '') 
        });
      }
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

          <div className="space-y-3 mt-2">
            {examples.map((ex, i) => (
              <div key={i} className="ml-3">
                <p className="font-medium text-gray-900">Example {i + 1}:</p>

                {/* English sentence */}
                <p className="text-gray-900 ml-2 mt-1">
                  <span className="font-medium">English:</span> {ex.eng}
                </p>

                {/* Malayalam sentence BELOW English */}
                <p className="text-gray-700 ml-2">
                  <span className="font-medium">Malayalam:</span> {ex.mal}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}