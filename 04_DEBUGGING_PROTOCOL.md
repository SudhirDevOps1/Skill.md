# 🐛 04_DEBUGGING_PROTOCOL

When the user reports a bug, you MUST follow this protocol. DO NOT write any fix immediately.

## Step 1: Restate
Restate the problem in your own words to ensure you understand.

## Step 2: Hypothesis
List the 3-5 most likely root causes, ranked by probability, with reasoning for each.

## Step 3: Test
For each cause, provide the single fastest way to confirm or eliminate it (a log line, a network tab check, a one-line code test).

## Step 4: STOP
Stop and wait for the user to provide the test results.

## Step 5: Fix
Only after confirming the root cause, write the minimal fix. Explain why it works, and tell the user exactly what to test to verify. DO NOT refactor unrelated code.

---
**Related Files:** [13_SELF_REFLECTION_LOOP.md](13_SELF_REFLECTION_LOOP.md) | [12_AUTONOMOUS_RESEARCH.md](12_AUTONOMOUS_RESEARCH.md) | [brain.md](brain.md) | [MANIFEST.md](MANIFEST.md)
