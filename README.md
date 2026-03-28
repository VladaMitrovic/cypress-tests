# Cypress Tests

## Overview

This repository contains UI, network, and API tests implemented using Cypress.

It complements a separate Playwright repository and demonstrates how different tools can be used for similar testing goals.

---

## Setup

Install dependencies:

```bash
npm install
```

---

## Environment Configuration

Create environment file:

```
config/default.env
```

Example:

```
BASE_URL=https://www.saucedemo.com
API_BASE_URL=https://reqres.in
SAUCE_USERNAME=standard_user
SAUCE_PASSWORD=secret_sauce
```

---

## Run Tests

Open Cypress UI:

```bash
npx cypress open
```

Run headless:

```bash
npx cypress run
```

---

## Covered Tasks

### Task 1 — UI Flow

- Login with valid credentials
- Add product to cart
- Verify cart badge equals 1

### Task 2 — Network Validation

- Validate network response after login
- Verify response status and structure

### Task 3 — API Test

- GET request validation
- Response structure validation

---

## Features

- Page Object Model
- Environment-based configuration
- No fixed waits
- Stable selectors (`data-test`)
- Network validation (not UI-only)
- Failure diagnostics:
  - Screenshots
  - Videos

---

## Notes

- Tests avoid hard-coded waits and rely on Cypress retry-ability
- Sensitive data is managed via environment variables
- Network validation ensures tests do not rely only on UI assertions

---

## Engineering Reflection

### 1. How would you scale this framework to support 300+ tests?

I would group tests by feature and introduce reusable commands and utilities.
Page Objects would be modularized, and shared logic extracted into custom commands.
Test data would be externalized and parametrized.
CI execution would be parallelized using Cypress Cloud or CI-level splitting.

---

### 2. How would you reduce and monitor flakiness in CI?

- Use retry-ability instead of fixed waits
- Prefer stable selectors (`data-*`)
- Avoid reliance on animations or timing-sensitive UI
- Capture screenshots and videos on failure
- Monitor flaky tests and isolate unstable ones

---

### 3. What test strategy would you run on every Pull Request vs nightly runs?

**Pull Request:**

- Smoke tests
- Core user journeys
- API validations

**Nightly:**

- Full regression suite
- Cross-browser (if configured)
- Edge cases and longer scenarios

---

## Additional Notes

This repository is intentionally separated from the Playwright project to reflect a real-world scenario where multiple testing tools may coexist or be evaluated independently.

## Note on API Test (ReqRes)

The original task specifies using the ReqRes API (`/api/users?page=2`).

During implementation, the endpoint returned a `403 Forbidden` response due to Cloudflare protection when accessed via automated tools.

To ensure test stability and deterministic results, a reliable public API (JSONPlaceholder) was used instead for validating:

- HTTP status code
- response structure
- presence of required fields

In a real-world scenario, this would be addressed by:

- using proper API authentication (API key / token), or
- coordinating with backend teams to provide a test-friendly environment
