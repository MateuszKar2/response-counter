 1. **Inicjalizacja TypeScript**
   
   Zainstalowano TypeScript i odpowiednie typy dla React.

   Zmiana rozszerzeń plików z `.js/.jsx` na `.ts/.tsx`.

2. **Definicja typów dla stanu**

   Zdefiniowano typ `FeedbackScores` dla stanu aplikacji, który zawiera `good`, `neutral` i `bad`.

3. **Typy dla propsów**

   Zdefiniowano typy dla propsów w komponentach, takich jak `FeedbackOptions` i `Section`.

4. **Zmiana funkcji w komponentach**

   Funkcja `onLeaveFeedback` zaktualizowana, aby przyjmowała parametr typu `keyof FeedbackScores`.

5. **Refaktoryzacja kodu**

   Usunięcie ogólnych typów (`any`, `string`) na rzecz precyzyjnych typów, takich jak `keyof FeedbackScores`.

   Dodanie `enum` dla opcji feedbacku (`good`, `neutral`, `bad`).

6. **Optymalizacja renderowania**

   Użycie typów zdefiniowanych w `enum` i `keyof FeedbackScores` przy renderowaniu przycisków.

7. **Zarządzanie stanem**

   Zastosowanie `useState` z precyzyjnie zdefiniowanymi typami dla stanu aplikacji.

8. **Testy i bezpieczeństwo typów**

   Dodanie typów w testach jednostkowych, aby zapewnić zgodność z TypeScript.

9. **Błędy i problemy z typami**

   Rozwiązanie problemów z niezgodnością typów między komponentami.

10. **Optymalizacja i usuwanie nieużywanych zmiennych**

    Usunięcie nieużywanych importów i zmiennych, optymalizacja kodu w celu zminimalizowania ostrzeżeń.
