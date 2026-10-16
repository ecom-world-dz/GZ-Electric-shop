// Netlify Function: taux de change indicatif USD -> DZD.
// IMPORTANT : vérifie la source et le schéma de réponse avant la mise en production.
const FALLBACK_RATE = Number(process.env.FALLBACK_USD_DZD_RATE || 240); // Exemple uniquement
const RATE_API_URL = process.env.RATE_API_URL || "https://squarealgerie.com/api/rates";

export default async () => {
  try {
    const response = await fetch(RATE_API_URL, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(8000)
    });
    if (!response.ok) throw new Error(`API HTTP ${response.status}`);
    const json = await response.json();

    // Adapter cette partie à la réponse JSON réelle de la source choisie.
    const rows = Array.isArray(json) ? json : (json.data ?? json.rates ?? []);
    const usd = rows.find(item =>
      String(item.currency ?? item.code ?? item.symbol ?? "").toUpperCase() === "USD"
    );
    const rate = Number(usd?.sell ?? usd?.selling ?? usd?.rate);

    if (!Number.isFinite(rate) || rate <= 0) {
      throw new Error("Champ du taux USD introuvable dans la réponse de l'API");
    }

    return Response.json({
      currency: "USD", quote: "DZD", rate,
      source: "Source externe configurée",
      updatedAt: new Date().toISOString(), live: true
    }, { headers: { "Cache-Control": "public, max-age=300" } });
  } catch (error) {
    console.error("Échec récupération du taux :", error.message);
    return Response.json({
      currency: "USD", quote: "DZD", rate: FALLBACK_RATE,
      source: "Taux de secours configuré", live: false,
      warning: "Taux non vérifié en direct. Vérifier avant toute décision."
    }, { headers: { "Cache-Control": "no-store" } });
  }
};
