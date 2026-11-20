# Tables Guided Test

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

A screen reader reads a data table one cell at a time and announces the row and column headers for each cell. If the headers are missing or wrong, the user hears numbers with no meaning. A layout table that is announced as a data table is just as confusing.

The Tables test finds the tables on the page, decides which hold data and which are only for layout, and checks that every data cell is tied to the correct headers. It does the automatic checks first, and then asks you to confirm the parts that need a person.

## When to use this

Use this test on pricing tables, reports, dashboards, schedules, comparison tables, and pages that use tables for layout.

## Prerequisites

The TestMu AI Accessibility Toolkit is installed. See [Install Toolkit](/support/docs/accessibility-testing-install-devtools/).

## What the test checks

| Rule | WCAG | Severity |
|---|---|---|
| Table has header cells or a caption but `role="presentation"` | 1.3.1 (A) | Serious |
| Cell headers attribute points at missing ids | 1.3.1 (A) | Serious |
| Header cell has no text | 1.3.1 (A) | Moderate |
| Data table contains nested tables | 1.3.1 (A) | Moderate |
| Layout table uses data-table markup | 1.3.1 (A) | Serious |
| Layout table is announced as a table | 1.3.1 (A) | Moderate |
| Data table has no header cells | 1.3.1 (A) | Critical |
| Header cell lacks scope in a two-way table | 1.3.1 (A) | Serious |
| Complex table cells are not associated with their headers | 1.3.1 (A) | Serious |
| Header cells do not describe their data | 2.4.6 (AA) | Moderate |
| Data cell is not associated with any header | 1.3.1 (A) | Serious |
| Cell acts as a header but is not marked as one | 1.3.1 (A) | Serious |
| Data cell is marked as a header | 1.3.1 (A) | Serious |
| Header cell has the wrong scope | 1.3.1 (A) | Serious |
| Data cell announces the wrong or incomplete headers | 1.3.1 (A) | Serious |

The report includes only the rules that fall within the WCAG version and level you set in [DevTools Settings](/support/docs/accessibility-devtools-settings/#wcag-version).

## Run the test

### Start the test

Open **Assisted Tests** in Accessibility DevTools and select **Tables**. Turn on **Verify with AI** if you want AI to give the first answers. See [Start a guided test](/support/docs/accessibility-guided-tests/#start-a-guided-test).

### Confirm data tables and layout tables

The test checks that a layout table is not announced as a data table, and that a data table is not hidden with `role="presentation"`. Confirm which tables hold data and which are only for layout.

{/* IMAGE PLACEHOLDER: List of detected tables marked as data or layout

*/}

### Review header cells

The test checks that a data table has header cells, that no header cell is empty, and that a two-way table uses `scope`. Confirm whether the header cells describe their data.

### Review cell associations

The test checks that:

- Every data cell is tied to a header.
- No data cell is marked as a header, and no header is left unmarked.
- The scope is correct.
- Complex tables associate each cell with its headers.

### Finish the test

Finish the test to generate the report. Your progress is saved, so you can close the panel and continue later.

## How AI helps

With **Verify with AI** on, AI gives the first answer to this question:

- Do the header cells describe the data in their rows and columns?

You can change the answer before you finish.

**AI credits**
**Verify with AI** will require AI credits. See [Credits Management](/support/docs/credits-management/).

## Related docs

- [Guided Tests](/support/docs/accessibility-guided-tests/)
- [Layout Guided Test](/support/docs/accessibility-guided-test-layout/)
- [Forms Guided Test](/support/docs/accessibility-guided-test-forms/)
- [DevTools Settings](/support/docs/accessibility-devtools-settings/)
