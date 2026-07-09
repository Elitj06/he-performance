# HE Performance Platform API

This first release is a static landing page plus PWA shell. No server API endpoints are exposed yet.

## Public Routes

| Route | Purpose | Status |
| --- | --- | --- |
| `/` | Landing page with clinic positioning, specialties, technology, team and contact CTA | Live |
| `/login` | Patient login placeholder | Live |
| `/app` | Patient portal placeholder | Live |
| `/dashboard` | Medical dashboard placeholder | Live |

## Future API Boundaries

- `routes/`: Next route handlers for HTTP input and output only.
- `services/`: prescription parsing, reminder orchestration, patient follow-up workflows.
- `data/`: database access and external integrations.
- `types/`: shared patient, protocol, prescription and appointment contracts.

## Error Shape

Future JSON endpoints should return:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Human readable message"
  }
}
```
