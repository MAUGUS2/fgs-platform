# 🤝 Contributing to FGS Platform

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ 
- **pnpm** (package manager)
- **Git** with GitFlow knowledge

### Development Setup
```bash
# Clone and setup
git clone <repo-url>
cd fgs-platform
pnpm install

# Start development
pnpm dev
```

## 📋 Development Workflow

### 1. Issue-Driven Development
- Check **ROADMAP.md** for current sprint issues
- Follow **PROGRESS.md** for daily tracking
- Each issue has granular subtasks

### 2. Branch Strategy (GitFlow)
```bash
# Start new feature
git checkout develop
git pull origin develop
git checkout -b feature/001-brief-description

# Work following ROADMAP.md subtasks
# Update PROGRESS.md daily

# Quality gates before commit
pnpm lint && pnpm type-check && pnpm test
```

### 3. Commit Standards
```bash
# Conventional Commits
type(scope): brief description

# Example:
feat(ui): add PropertyCard component with glass morphism

- Implement responsive card layout
- Add hover animations
- Include property data display

Implements Issue #009
```

## 🧪 Quality Standards

### Testing Requirements
- **Unit tests**: Critical components
- **Integration tests**: API endpoints  
- **E2E tests**: User workflows
- **Target coverage**: 80%+

### Performance Requirements
- **Lighthouse score**: 90+
- **LCP**: < 1.8s
- **CLS**: < 0.1
- **Bundle size**: Monitored

### Code Quality
```bash
# Before every commit
pnpm lint          # ESLint
pnpm type-check    # TypeScript
pnpm test          # All tests
pnpm build         # Production build
```

## 📚 Learning & Mentoring

### Educational Approach
- **Explain before doing**: Understand the "why"
- **Step-by-step**: Break complex tasks down
- **Context sharing**: How it fits in architecture
- **Learning logs**: Document new concepts

### Getting Help
1. Check **CLAUDE.md** for project-specific info
2. Review **ROADMAP.md** for issue context
3. Look at similar completed issues
4. Ask specific questions with context

## 🎯 Definition of Done

### For Issues:
- [ ] All subtasks completed
- [ ] Acceptance criteria met
- [ ] Tests written and passing
- [ ] Code review approved
- [ ] Documentation updated
- [ ] PROGRESS.md updated

### For Sprints:
- [ ] All issues completed
- [ ] Performance benchmarks met
- [ ] Security requirements satisfied
- [ ] Sprint review completed

## 🔧 Tech Stack Guidelines

### TypeScript
- Type everything explicitly
- Use strict mode
- Prefer interfaces over types

### React/Next.js
- Use App Router (Next.js 14)
- Server Components when possible
- Proper error boundaries

### Styling
- Tailwind with design tokens
- Consistent spacing scale
- Mobile-first approach

### 3D Development
- React Three Fiber
- Performance-first
- Always provide fallbacks

## 🚨 Common Pitfalls

### Avoid:
- Direct commits to main/develop
- Large commits without context
- Skipping quality gates
- Missing progress updates
- Over-engineering solutions

### Best Practices:
- Small, focused commits
- Regular progress updates
- Performance monitoring
- Security considerations
- Documentation as you go

---

**Remember**: This is a learning journey. Ask questions, share knowledge, and build something amazing! 🚀