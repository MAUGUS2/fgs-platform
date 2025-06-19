# 🏢 FGS Platform - Claude Code Configuration

## 📋 Project Overview
**FGS Real Estate Management Platform** - Luxury-minimal site evolving to multi-tenant dashboard
- **Stack**: Next.js 14 + TypeScript + pnpm monorepo
- **Architecture**: Modular + Hexagonal Architecture
- **Goal**: MVP in 4 sprints → production-ready platform

---

## 🛠️ FGS Platform Commands

### **Development Workflow**
```bash
# 🚀 Development
pnpm install                    # Install all dependencies
pnpm dev                       # Start all apps in development
pnpm dev:marketing            # Start only marketing app
pnpm dev:dashboard            # Start only dashboard (when ready)

# 🏗️ Build & Production
pnpm build                    # Build all apps
pnpm build:marketing         # Build only marketing app
pnpm start                   # Start production server
pnpm preview                 # Preview production build

# 📦 Package Management
pnpm add <package>                    # Add to root workspace
pnpm add <package> --filter marketing # Add to specific app
pnpm add <package> -w                 # Add to workspace root
pnpm remove <package> --filter ui     # Remove from specific package
```

### **Database & tRPC**
```bash
# 🗄️ Database Operations
pnpm db:generate             # Generate Prisma client
pnpm db:push                 # Push schema to dev database
pnpm db:migrate              # Run database migrations
pnpm db:studio               # Open Prisma Studio
pnpm db:seed                 # Seed development data
pnpm db:reset                # Reset database completely

# 🔄 API Operations
pnpm trpc:generate           # Generate tRPC types
pnpm api:dev                 # Start API in development mode
pnpm api:test                # Test API endpoints
```

### **Quality & Testing**
```bash
# 🧪 Testing
pnpm test                    # Run all tests
pnpm test:unit               # Run unit tests only
pnpm test:e2e                # Run E2E tests with Playwright
pnpm test:watch              # Run tests in watch mode
pnpm test:coverage           # Generate coverage report

# ✨ Code Quality
pnpm lint                    # ESLint all packages
pnpm lint:fix                # Auto-fix linting issues
pnpm type-check              # TypeScript type checking
pnpm format                  # Prettier formatting
pnpm format:check            # Check formatting without fixing

# 🔒 Security
pnpm security:audit         # Audit dependencies for vulnerabilities
pnpm security:scan          # OWASP security scan
```

### **3D Development (React Three Fiber)**
```bash
# 🎨 3D Development
pnpm 3d:dev                  # Development mode with 3D debugging
pnpm 3d:debug                # Enable R3F debug mode
pnpm 3d:optimize             # Optimize 3D assets
pnpm 3d:fallback             # Test fallback mode
```

### **Deployment & Production**
```bash
# 🚀 Deployment
pnpm deploy:staging          # Deploy to staging environment
pnpm deploy:production       # Deploy to production
pnpm deploy:marketing        # Deploy only marketing site
pnpm deploy:dashboard        # Deploy only dashboard

# 📊 Monitoring
pnpm logs:marketing          # View marketing app logs
pnpm logs:api                # View API logs
pnpm health:check            # Check application health
```

---

## 📊 FGS Development Workflow

### **🎯 Issue-Driven Development**
```bash
# 1. Start new issue (follow ROADMAP.md)
git checkout develop
git pull origin develop
git checkout -b feature/001-monorepo-structure

# 2. Work on issue following subtasks
# Check ROADMAP.md for issue #001 specific tasks
# Update PROGRESS.md with daily progress

# 3. Quality gates before commit
pnpm lint
pnpm type-check
pnpm test
pnpm build

# 4. Commit using Conventional Commits
git add .
git commit -m "feat(monorepo): initialize pnpm workspace structure

- Create workspace configuration in package.json
- Setup apps/ and packages/ directory structure
- Configure basic monorepo scripts
- Add workspace dependency management

Implements Issue #001 subtasks 1-4
Fixes #001"

# 5. Update progress tracking
# Mark subtasks complete in ROADMAP.md
# Update PROGRESS.md with completion status
# Log daily progress entry
```

### **🔄 Sprint Workflow**
```bash
# Sprint Planning (every 2 weeks)
# 1. Review ROADMAP.md current sprint
# 2. Update PROGRESS.md sprint status
# 3. Plan daily tasks from issue subtasks

# Daily Development
# 1. Check PROGRESS.md for today's focus
# 2. Work on current issue subtasks
# 3. Update progress as you complete subtasks
# 4. Log daily progress in PROGRESS.md

# Sprint Review (end of sprint)
# 1. Complete Sprint Review section in PROGRESS.md
# 2. Archive completed issues
# 3. Plan next sprint from ROADMAP.md
```

### **📈 Progress Tracking Protocol**
```bash
# Daily Updates Required:
# 1. Update issue progress percentages
# 2. Mark completed subtasks with ✅
# 3. Update PROGRESS.md daily log
# 4. Note any blockers or risks
# 5. Update sprint statistics

# When Starting Issue:
# Status: 📋 Planned → 🔄 In Progress
# Add to "Active Issues" table in PROGRESS.md

# When Completing Issue:
# Status: 🔄 In Progress → ✅ Completed
# Update overall progress percentages
# Move to "Completed Issues Archive"
# Update sprint completion metrics
```

---

## 🏗️ FGS Architecture Understanding

### **📁 Monorepo Structure**
```
fgs-platform/
├── apps/
│   ├── marketing/          # Next.js marketing site
│   │   ├── app/           # App Router pages
│   │   ├── components/    # Page-specific components
│   │   └── public/        # Static assets
│   └── dashboard/         # Next.js dashboard (future)
│       ├── app/
│       └── components/
├── packages/
│   ├── ui/               # Shared UI components
│   │   ├── components/   # Reusable components
│   │   ├── tokens/       # Design tokens
│   │   └── stories/      # Storybook stories
│   ├── api/              # tRPC API layer
│   │   ├── routers/      # API route definitions
│   │   ├── procedures/   # Business logic
│   │   └── types/        # Shared types
│   ├── db/               # Database layer
│   │   ├── prisma/       # Prisma schema & migrations
│   │   ├── seed/         # Database seeding
│   │   └── types/        # Database types
│   └── config/           # Shared configurations
│       ├── tailwind/     # Tailwind preset
│       ├── eslint/       # ESLint configs
│       └── tsconfig/     # TypeScript configs
├── ROADMAP.md            # Detailed development roadmap
├── PROGRESS.md           # Real-time progress tracking
└── package.json          # Workspace configuration
```

### **🔄 Data Flow Architecture**
```
Browser ⇄ Next.js Server Actions ⇄ tRPC API ⇄ Prisma ORM ⇄ PostgreSQL
                                        │
                                        └── Future: Python Microservice
```

### **🎨 Component Architecture**
```
Page Component
├── Layout Component (shared)
├── Section Components (page-specific)
│   ├── UI Components (@fgs/ui)
│   ├── Business Logic (tRPC calls)
│   └── 3D Components (React Three Fiber)
└── SEO Component (metadata)
```

---

## 📚 Teaching & Learning Protocol

### **🎯 Educational Approach**
**Every implementation must include:**
1. **Why we're doing it** (business/technical reason)
2. **How it fits in the architecture** (system context)
3. **Step-by-step breakdown** (granular tasks)
4. **Visual examples** (code snippets, diagrams)
5. **Common pitfalls** (what to avoid)
6. **Testing approach** (how to validate)

### **📖 Learning Documentation**
```bash
# For each new concept, create explanations:
# 1. What is X? (definition)
# 2. Why do we use X? (motivation)
# 3. How does X work? (implementation)
# 4. When do we use X? (use cases)
# 5. Common patterns with X (best practices)

# Example topics to explain during development:
# - pnpm workspaces vs npm
# - tRPC vs REST APIs
# - Server Actions vs API routes
# - React Three Fiber basics
# - Prisma ORM concepts
# - Tailwind design system
```

### **🔍 Code Review Protocol**
```bash
# Before any code review, explain:
# 1. What problem this solves
# 2. Why this approach was chosen
# 3. How it integrates with existing code
# 4. What was learned during implementation
# 5. Any trade-offs or technical debt
```

---

## 🎯 FGS Specific Standards

### **🎨 Design System**
```typescript
// Use consistent design tokens
import { tokens } from '@fgs/ui/tokens'

// Component naming: PascalCase + descriptive
export function PropertyCard({ property }: PropertyCardProps) {}

// File naming: kebab-case
// property-card.tsx
// contact-form.tsx
// hero-section.tsx
```

### **📝 Commit Message Format**
```bash
# FGS Conventional Commits
type(scope): brief description

# Types: feat, fix, docs, style, refactor, test, chore
# Scopes: monorepo, ui, api, db, marketing, dashboard, 3d

# Examples:
feat(ui): add PropertyCard component with glass morphism
fix(api): resolve contact form email validation
docs(roadmap): update Sprint 1 progress tracking
refactor(3d): optimize hero scene performance
test(e2e): add contact form submission workflow

# Always include:
# - What was implemented
# - Why it was needed
# - Issue reference: "Implements Issue #001" or "Fixes #001"
```

### **🧪 Testing Standards**
```typescript
// Test file naming: *.test.tsx or *.spec.tsx
// Test location: same directory as component or /tests

// Unit tests for components
describe('PropertyCard', () => {
  it('should render property information correctly', () => {
    // Test implementation
  })
})

// Integration tests for API
describe('Contact API', () => {
  it('should send email when form is submitted', async () => {
    // Test implementation
  })
})

// E2E tests for user flows
test('User can submit contact form', async ({ page }) => {
  // Playwright test
})
```

---

## 🚀 Quick Start Checklist

### **📋 Before Starting Development**
- [ ] Read ROADMAP.md current sprint
- [ ] Check PROGRESS.md for today's focus
- [ ] Review current issue subtasks
- [ ] Understand issue dependencies
- [ ] Identify any potential blockers

### **🔄 During Development**
- [ ] Follow issue subtask order
- [ ] Update progress as you complete tasks
- [ ] Run quality gates frequently
- [ ] Document learning and decisions
- [ ] Ask questions when blocked

### **✅ Before Completing Issue**
- [ ] All subtasks completed ✅
- [ ] All acceptance criteria met ✅
- [ ] Tests written and passing ✅
- [ ] Code reviewed and approved ✅
- [ ] Documentation updated ✅
- [ ] Performance benchmarks met ✅
- [ ] Progress tracking updated ✅

---

## 🔧 Troubleshooting

### **Common Issues & Solutions**
```bash
# pnpm workspace issues
pnpm install --force           # Force reinstall dependencies
pnpm store prune               # Clean pnpm store

# TypeScript issues
pnpm type-check --verbose      # Detailed type checking
rm -rf node_modules .next      # Clean build artifacts
pnpm install                   # Reinstall

# 3D Performance issues
# Enable React DevTools Profiler
# Check fallback image loads correctly
# Monitor bundle size impact

# Build issues
pnpm clean                     # Clean all build outputs
pnpm build --verbose           # Verbose build output
```

### **Getting Help**
```bash
# When stuck:
# 1. Check ROADMAP.md for issue context
# 2. Review similar completed issues
# 3. Check architecture documentation
# 4. Ask specific questions with context
```

---

## 📊 Success Metrics

### **Sprint Success Criteria**
- **Velocity**: Complete all planned issues
- **Quality**: 90+ Lighthouse score
- **Performance**: <2s load time
- **Testing**: 80%+ coverage
- **Security**: Zero vulnerabilities

### **Daily Success Indicators**
- Progress tracking updated
- At least one subtask completed
- No new blockers introduced
- Learning documented
- Quality gates maintained

---

**🎯 Remember: This is a learning journey. Every issue completed makes you more proficient with modern web development!**

**🚀 Ready to build the future of real estate management!**