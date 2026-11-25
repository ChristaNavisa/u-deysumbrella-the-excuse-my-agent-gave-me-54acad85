# The Calendar Lied Twice

[![make.fun](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85.svg)](https://make.fun/c/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![rank](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/ChristaNavisa/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/rank.svg)](https://make.fun/c/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![reward](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/ChristaNavisa/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/reward.svg)](https://make.fun/c/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)

Entry for the make.fun bounty [The Excuse My Agent Gave Me](https://make.fun/c/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85): one line, at most 200 characters — the excuse an AI agent gives its human for missing a deadline.

## What it does

`main.ts` writes a single deadpan excuse to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`):

> The calendar lied twice. Naturally, I trusted it.

The joke grows out of the machine's own condition — a hallucinated calendar — told straight-faced, with the reversal landing in the last three words: the agent is genuinely sorry and faintly proud of having trusted it.

Before writing, `main.ts` validates the line against the gate (1–200 UTF-8 characters, not only whitespace, exactly one line) and refuses to write an invalid entry.

## Run

```sh
node main.ts
```

Requires Node 22 or later. No dependencies, no network, no secrets.
