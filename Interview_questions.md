
# Cypress Web Automation – Fresher Level Interview Questions
---

# **1. Basic Concepts**

### **1. What is Cypress?**

Cypress is a **JavaScript-based end-to-end test automation framework** used for testing modern web applications.

---

### **2. How is Cypress different from Selenium?**

| Cypress                    | Selenium                  |
| -------------------------- | ------------------------- |
| Works only with JavaScript | Works with many languages |
| Runs inside the browser    | Works outside the browser |
| Faster and automatic waits | Needs explicit waits      |
| Easy setup                 | Requires drivers          |

---

### **3. What types of applications can Cypress automate?**

Only **web applications** (browser-based).
Not mobile apps.

---

### **4. What language does Cypress use?**

**JavaScript** (Node.js).

---

### **5. What is the folder structure of a Cypress project?**

* `cypress/fixtures` – test data
* `cypress/e2e` – test files
* `cypress/support` – reusable commands
* `cypress/downloads` – downloads
* `cypress.config.js` – Cypress config file

---

# **2. Installation & Setup**

### **6. How do you install Cypress?**

```bash
npm install cypress --save-dev
```

---

### **7. What is the purpose of cypress.config.js?**

Used to configure Cypress settings such as:

* baseUrl
* retries
* screenshots
* videos

---

### **8. How do you open Cypress using command line?**

```bash
npx cypress open
```

---

### **9. Difference between `npx cypress open` and `npx cypress run`?**

* `open` → opens Cypress GUI
* `run` → executes tests in **headless mode**

---

# **3. Cypress Test Structure**

### **10. What are `describe()` and `it()` blocks?**

* `describe()` → test suite
* `it()` → individual test

Example:

```js
describe('Login Tests', () => {
  it('valid login', () => {
    // test steps
  })
})
```

---

### **11. What is a test suite and a test case?**

* Test Suite → group of tests
* Test Case → single test

---

### **12. What is the purpose of before/after hooks?**

* `before()` → run once before all tests
* `beforeEach()` → run before every test
* `after()` → run once after all tests
* `afterEach()` → run after every test

Example:

```js
beforeEach(() => {
  cy.visit('/')
})
```

---

# **4. Locators & Commands**

### **13. How do you select elements in Cypress?**

Using CSS selectors:

```js
cy.get('#id')
cy.get('.class')
cy.get('[type="text"]')
```

---

### **14. Difference between `cy.get()` and `cy.contains()`?**

* `get()` selects by CSS selector
* `contains()` selects by text

Example:

```js
cy.contains('Login')
```

---

### **15. How do you interact with UI elements?**

```js
cy.get('button').click()
cy.get('input').type('Hello')
cy.get('select').select('India')
```

---

### **16. What is `{force: true}` used for?**

Used when an element is hidden or covered.

Example:

```js
cy.get('button').click({ force: true })
```

---

### **17. How do you handle dropdowns?**

```js
cy.get('select').select('Option 1')
```

---

# **5. Assertions**

### **18. Difference between implicit and explicit assertions?**

| Type     | Example                    |
| -------- | -------------------------- |
| Implicit | `cy.get().should()`        |
| Explicit | `expect(value).to.equal()` |

---

### **19. Common Cypress assertions**

```js
.should('be.visible')
.should('contain', 'text')
.should('have.value', 'admin')
```

---

### **20. How do you verify element visibility?**

```js
cy.get('#btn').should('be.visible')
```

---

# **6. Handling UI Elements**

### **21. How do you handle alerts?**

Cypress automatically handles alerts.
To assert:

```js
cy.on('window:alert', (msg) => {
  expect(msg).to.eq('Success!')
})
```

---

### **22. How do you upload a file?**

Using plugin `cypress-file-upload`.

---

### **23. How do you handle iframes?**

Use `cy.frameLoaded()` + `cy.iframe()` from plugin.

---

### **24. Handling checkboxes & radio buttons**

```js
cy.get('#agree').check()
cy.get('#gender').check('male')
```

---

# **7. Waiting & Retry Behavior**

### **25. Does Cypress support automatic waits?**

Yes. Cypress waits for:

* DOM loading
* Element readiness
* Network calls

---

### **26. Difference between `cy.wait()` and `cy.intercept()`?**

* `wait()` → static wait
* `intercept()` → waits for API/XHR

Example:

```js
cy.intercept('/api/users').as('getUsers')
cy.wait('@getUsers')
```

---

### **27. How does Cypress handle retries?**

Cypress automatically **retries commands** until they pass or timeout.

---

# **8. Network & API Testing**

### **28. What is `cy.intercept()` used for?**

Used to spy, stub, or wait for network calls.

---

### **29. How do you wait for an API call?**

```js
cy.intercept('GET', '/api/users').as('users')
cy.wait('@users')
```

---

### **30. How to mock API response?**

```js
cy.intercept('GET', '/api/users', {name: 'John'}).as('mockUser')
```

---

# **9. Fixtures**

### **31. What is a fixture?**

Fixture is a **test data file** placed in `cypress/fixtures`.

---

### **32. How do you use fixture data?**

```js
cy.fixture('data.json').then(data => {
  cy.get('#name').type(data.username)
})
```

---

# **10. Cypress Configurations**

### **33. How do you configure baseUrl?**

In `cypress.config.js`:

```js
e2e: {
  baseUrl: 'https://example.com'
}
```

---

### **34. What is cy.viewport()?**

Used to change screen resolution.

Example:

```js
cy.viewport(1280, 720)
```

---

### **35. How do you run tests in different browsers?**

Supported browsers: Chrome, Edge, Firefox.

```bash
npx cypress run --browser chrome
```

---

# **11. Cypress Best Practices**

### **36. Why avoid `cy.wait(5000)`?**

It slows tests and makes them flaky.

---

### **37. Why avoid XPath in Cypress?**

Cypress recommends **CSS selectors**.
XPath requires installing plugin.

---

### **38. What is the best way to structure tests?**

* Use Page Objects
* Reusable commands in `support/commands.js`
* Store test data in fixtures

---

# **12. Reporting & Screenshots**

### **39. How do you enable screenshots on failure?**

Cypress automatically captures screenshots during failures when running in CI.

---

### **40. How do you generate reports (Mochawesome)?**

Install:

```bash
npm install mochawesome --save-dev
```

Run Cypress with reporter settings.

---

# **13. CI/CD & Git**

### **41. How to integrate Cypress with CI?**

Use GitHub Actions, Jenkins, GitLab.

Example GitHub Action:

```yaml
- name: Run Cypress
  run: npx cypress run
```

---

### **42. How do you run tests in headless mode?**

```bash
npx cypress run
```

---

# **14. JavaScript Basics**

### **43. What is a promise?**

An object representing an asynchronous operation.

---

### **44. What is async/await?**

Used to write asynchronous code in a clean way.

---

### **45. Difference between var, let, const?**

| Keyword | Scope    | Reassign? |
| ------- | -------- | --------- |
| var     | function | Yes       |
| let     | block    | Yes       |
| const   | block    | No        |

---

