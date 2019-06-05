(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    SqxF: function(l, n, e) {
      'use strict';
      e.r(n);
      var t = e('CcnG'),
        a = (function() {
          return function() {};
        })(),
        u = e('t68o'),
        i = e('zbXB'),
        o = e('NcP4'),
        r = e('xYTU'),
        c = e('pMnS'),
        b = e('ZYCi'),
        s = (function() {
          function l() {}
          return (l.prototype.ngOnInit = function() {}), l;
        })(),
        d = t.qb({ encapsulation: 0, styles: [['']], data: {} });
      function m(l) {
        return t.Lb(
          0,
          [
            (l()(), t.sb(0, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
            t.rb(1, 212992, null, 0, b.p, [b.b, t.R, t.j, [8, null], t.h], null, null),
            (l()(), t.Jb(-1, null, ['\n']))
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      function p(l) {
        return t.Lb(
          0,
          [
            (l()(), t.sb(0, 0, null, null, 1, 'app-staff', [], null, null, null, m, d)),
            t.rb(1, 114688, null, 0, s, [], null, null)
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var h = t.ob('app-staff', s, p, {}, {}, []),
        f = e('BHnd'),
        g = e('y4qS'),
        C = e('pIm3'),
        k = e('lzlj'),
        x = e('FVSy'),
        v = e('Fzqc'),
        y = e('Ip0R'),
        _ = e('dWZg'),
        w = e('bujt'),
        J = e('UodH'),
        A = e('lLAP'),
        S = e('wFw1'),
        O = e('t/Na'),
        F = (function() {
          function l(l) {
            (this.httpClient = l), (this.prefix = '/users');
          }
          return (
            (l.prototype.findAll = function() {
              return this.httpClient.get(this.prefix);
            }),
            (l.prototype.findById = function(l) {
              return this.httpClient.get(this.prefix + '/' + l);
            }),
            (l.prototype.create = function(l) {
              return this.httpClient.post(this.prefix, l);
            }),
            (l.prototype.update = function(l, n) {
              return this.httpClient.put(this.prefix + '/' + n, l);
            }),
            (l.prototype.delete = function(l) {
              return this.httpClient.delete(this.prefix + '/' + l);
            }),
            (l.ngInjectableDef = t.V({
              factory: function() {
                return new l(t.Z(O.c));
              },
              token: l,
              providedIn: 'root'
            })),
            l
          );
        })(),
        L = (function() {
          function l(l, n) {
            (this.route = l),
              (this.staffService = n),
              (this.displayedColumns = ['name', 'email', 'phone', 'permission']);
          }
          return (
            (l.prototype.ngOnInit = function() {
              this.list();
            }),
            (l.prototype.list = function() {
              var l = this;
              this.staffService.findAll().subscribe(function(n) {
                l.staffs = n;
              });
            }),
            (l.prototype.editStaff = function(l) {
              this.route.navigate(['staff/edit/' + l._id]);
            }),
            (l.prototype.permission = function() {
              this.route.navigate(['staff/permission/']);
            }),
            (l.prototype.addStaff = function() {
              this.route.navigate(['staff/add']);
            }),
            l
          );
        })(),
        j = t.qb({ encapsulation: 0, styles: [['']], data: {} });
      function H(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
              0,
              0,
              null,
              null,
              2,
              'th',
              [['class', 'mat-header-cell'], ['mat-header-cell', ''], ['role', 'columnheader']],
              null,
              null,
              null,
              null,
              null
            )),
            t.rb(1, 16384, null, 0, f.e, [g.d, t.k], null, null),
            (l()(), t.Jb(-1, null, ['Name']))
          ],
          null,
          null
        );
      }
      function P(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
              0,
              0,
              null,
              null,
              2,
              'td',
              [['class', 'mat-cell'], ['mat-cell', ''], ['role', 'gridcell']],
              null,
              null,
              null,
              null,
              null
            )),
            t.rb(1, 16384, null, 0, f.a, [g.d, t.k], null, null),
            (l()(), t.Jb(2, null, ['', '']))
          ],
          null,
          function(l, n) {
            l(n, 2, 0, n.context.$implicit.name);
          }
        );
      }
      function M(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
              0,
              0,
              null,
              null,
              2,
              'th',
              [['class', 'mat-header-cell'], ['mat-header-cell', ''], ['role', 'columnheader']],
              null,
              null,
              null,
              null,
              null
            )),
            t.rb(1, 16384, null, 0, f.e, [g.d, t.k], null, null),
            (l()(), t.Jb(-1, null, ['Email']))
          ],
          null,
          null
        );
      }
      function I(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
              0,
              0,
              null,
              null,
              2,
              'td',
              [['class', 'mat-cell'], ['mat-cell', ''], ['role', 'gridcell']],
              null,
              null,
              null,
              null,
              null
            )),
            t.rb(1, 16384, null, 0, f.a, [g.d, t.k], null, null),
            (l()(), t.Jb(2, null, ['', '']))
          ],
          null,
          function(l, n) {
            l(n, 2, 0, n.context.$implicit.email);
          }
        );
      }
      function G(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
              0,
              0,
              null,
              null,
              2,
              'th',
              [['class', 'mat-header-cell'], ['mat-header-cell', ''], ['role', 'columnheader']],
              null,
              null,
              null,
              null,
              null
            )),
            t.rb(1, 16384, null, 0, f.e, [g.d, t.k], null, null),
            (l()(), t.Jb(-1, null, ['Phone Number']))
          ],
          null,
          null
        );
      }
      function D(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
              0,
              0,
              null,
              null,
              2,
              'td',
              [['class', 'mat-cell'], ['mat-cell', ''], ['role', 'gridcell']],
              null,
              null,
              null,
              null,
              null
            )),
            t.rb(1, 16384, null, 0, f.a, [g.d, t.k], null, null),
            (l()(), t.Jb(2, null, ['', '']))
          ],
          null,
          function(l, n) {
            l(n, 2, 0, n.context.$implicit.phone);
          }
        );
      }
      function E(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
              0,
              0,
              null,
              null,
              2,
              'th',
              [['class', 'mat-header-cell'], ['mat-header-cell', ''], ['role', 'columnheader']],
              null,
              null,
              null,
              null,
              null
            )),
            t.rb(1, 16384, null, 0, f.e, [g.d, t.k], null, null),
            (l()(), t.Jb(-1, null, ['Permission']))
          ],
          null,
          null
        );
      }
      function R(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
              0,
              0,
              null,
              null,
              2,
              'td',
              [['class', 'mat-cell'], ['mat-cell', ''], ['role', 'gridcell']],
              null,
              null,
              null,
              null,
              null
            )),
            t.rb(1, 16384, null, 0, f.a, [g.d, t.k], null, null),
            (l()(), t.Jb(2, null, ['', '']))
          ],
          null,
          function(l, n) {
            l(n, 2, 0, n.context.$implicit.permission);
          }
        );
      }
      function q(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
              0,
              0,
              null,
              null,
              2,
              'tr',
              [['class', 'mat-header-row'], ['mat-header-row', ''], ['role', 'row']],
              null,
              null,
              null,
              C.d,
              C.a
            )),
            t.Gb(6144, null, g.k, null, [f.g]),
            t.rb(2, 49152, null, 0, f.g, [], null, null)
          ],
          null,
          null
        );
      }
      function z(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
              0,
              0,
              null,
              null,
              2,
              'tr',
              [['class', 'cursor-pointer mat-row'], ['mat-row', ''], ['role', 'row']],
              null,
              [[null, 'click']],
              function(l, n, e) {
                var t = !0;
                return 'click' === n && (t = !1 !== l.component.editStaff(l.context.$implicit) && t), t;
              },
              C.e,
              C.b
            )),
            t.Gb(6144, null, g.m, null, [f.i]),
            t.rb(2, 49152, null, 0, f.i, [], null, null)
          ],
          null,
          null
        );
      }
      function N(l) {
        return t.Lb(
          0,
          [
            (l()(), t.sb(0, 0, null, null, 107, 'mat-card', [['class', 'm-1 mat-card']], null, null, null, k.d, k.a)),
            t.rb(1, 49152, null, 0, x.a, [], null, null),
            (l()(), t.Jb(-1, 0, ['\n  '])),
            (l()(),
            t.sb(3, 0, null, 0, 91, 'mat-card-content', [['class', 'mat-card-content']], null, null, null, null, null)),
            t.rb(4, 16384, null, 0, x.c, [], null, null),
            (l()(), t.Jb(-1, null, ['\n    '])),
            (l()(),
            t.sb(
              6,
              0,
              null,
              null,
              87,
              'table',
              [['class', 'w-100 mat-elevation-z8 mat-table'], ['mat-table', '']],
              null,
              null,
              null,
              C.f,
              C.c
            )),
            t.rb(
              7,
              2342912,
              null,
              4,
              f.k,
              [t.u, t.h, t.k, [8, null], [2, v.b], y.d, _.a],
              { dataSource: [0, 'dataSource'] },
              null
            ),
            t.Hb(603979776, 1, { _contentColumnDefs: 1 }),
            t.Hb(603979776, 2, { _contentRowDefs: 1 }),
            t.Hb(603979776, 3, { _contentHeaderRowDefs: 1 }),
            t.Hb(603979776, 4, { _contentFooterRowDefs: 1 }),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.sb(14, 0, null, null, 15, null, null, null, null, null, null, null)),
            t.Gb(6144, null, 'MAT_SORT_HEADER_COLUMN_DEF', null, [f.c]),
            t.rb(16, 16384, null, 3, f.c, [], { name: [0, 'name'] }, null),
            t.Hb(335544320, 5, { cell: 0 }),
            t.Hb(335544320, 6, { headerCell: 0 }),
            t.Hb(335544320, 7, { footerCell: 0 }),
            t.Gb(2048, [[1, 4]], g.d, null, [f.c]),
            (l()(), t.Jb(-1, null, ['\n        '])),
            (l()(), t.jb(0, null, null, 2, null, H)),
            t.rb(23, 16384, null, 0, f.f, [t.O], null, null),
            t.Gb(2048, [[6, 4]], g.j, null, [f.f]),
            (l()(), t.Jb(-1, null, ['\n        '])),
            (l()(), t.jb(0, null, null, 2, null, P)),
            t.rb(27, 16384, null, 0, f.b, [t.O], null, null),
            t.Gb(2048, [[5, 4]], g.b, null, [f.b]),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.Jb(-1, null, ['\n\n      '])),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.sb(32, 0, null, null, 15, null, null, null, null, null, null, null)),
            t.Gb(6144, null, 'MAT_SORT_HEADER_COLUMN_DEF', null, [f.c]),
            t.rb(34, 16384, null, 3, f.c, [], { name: [0, 'name'] }, null),
            t.Hb(335544320, 8, { cell: 0 }),
            t.Hb(335544320, 9, { headerCell: 0 }),
            t.Hb(335544320, 10, { footerCell: 0 }),
            t.Gb(2048, [[1, 4]], g.d, null, [f.c]),
            (l()(), t.Jb(-1, null, ['\n        '])),
            (l()(), t.jb(0, null, null, 2, null, M)),
            t.rb(41, 16384, null, 0, f.f, [t.O], null, null),
            t.Gb(2048, [[9, 4]], g.j, null, [f.f]),
            (l()(), t.Jb(-1, null, ['\n        '])),
            (l()(), t.jb(0, null, null, 2, null, I)),
            t.rb(45, 16384, null, 0, f.b, [t.O], null, null),
            t.Gb(2048, [[8, 4]], g.b, null, [f.b]),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.Jb(-1, null, ['\n\n      '])),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.sb(50, 0, null, null, 15, null, null, null, null, null, null, null)),
            t.Gb(6144, null, 'MAT_SORT_HEADER_COLUMN_DEF', null, [f.c]),
            t.rb(52, 16384, null, 3, f.c, [], { name: [0, 'name'] }, null),
            t.Hb(335544320, 11, { cell: 0 }),
            t.Hb(335544320, 12, { headerCell: 0 }),
            t.Hb(335544320, 13, { footerCell: 0 }),
            t.Gb(2048, [[1, 4]], g.d, null, [f.c]),
            (l()(), t.Jb(-1, null, ['\n        '])),
            (l()(), t.jb(0, null, null, 2, null, G)),
            t.rb(59, 16384, null, 0, f.f, [t.O], null, null),
            t.Gb(2048, [[12, 4]], g.j, null, [f.f]),
            (l()(), t.Jb(-1, null, ['\n        '])),
            (l()(), t.jb(0, null, null, 2, null, D)),
            t.rb(63, 16384, null, 0, f.b, [t.O], null, null),
            t.Gb(2048, [[11, 4]], g.b, null, [f.b]),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.Jb(-1, null, ['\n\n      '])),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.sb(68, 0, null, null, 15, null, null, null, null, null, null, null)),
            t.Gb(6144, null, 'MAT_SORT_HEADER_COLUMN_DEF', null, [f.c]),
            t.rb(70, 16384, null, 3, f.c, [], { name: [0, 'name'] }, null),
            t.Hb(335544320, 14, { cell: 0 }),
            t.Hb(335544320, 15, { headerCell: 0 }),
            t.Hb(335544320, 16, { footerCell: 0 }),
            t.Gb(2048, [[1, 4]], g.d, null, [f.c]),
            (l()(), t.Jb(-1, null, ['\n        '])),
            (l()(), t.jb(0, null, null, 2, null, E)),
            t.rb(77, 16384, null, 0, f.f, [t.O], null, null),
            t.Gb(2048, [[15, 4]], g.j, null, [f.f]),
            (l()(), t.Jb(-1, null, ['\n        '])),
            (l()(), t.jb(0, null, null, 2, null, R)),
            t.rb(81, 16384, null, 0, f.b, [t.O], null, null),
            t.Gb(2048, [[14, 4]], g.b, null, [f.b]),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.Jb(-1, null, ['\n\n      '])),
            (l()(), t.sb(85, 0, null, null, 8, 'tbody', [], null, null, null, null, null)),
            (l()(), t.jb(0, null, null, 2, null, q)),
            t.rb(87, 540672, null, 0, f.h, [t.O, t.u], { columns: [0, 'columns'] }, null),
            t.Gb(2048, [[3, 4]], g.l, null, [f.h]),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.jb(0, null, null, 2, null, z)),
            t.rb(91, 540672, null, 0, f.j, [t.O, t.u], { columns: [0, 'columns'] }, null),
            t.Gb(2048, [[2, 4]], g.n, null, [f.j]),
            (l()(), t.Jb(-1, null, ['\n    '])),
            (l()(), t.Jb(-1, null, ['\n  '])),
            (l()(), t.Jb(-1, 0, ['\n\n  '])),
            (l()(),
            t.sb(
              96,
              0,
              null,
              0,
              10,
              'mat-card-actions',
              [['class', 'mat-card-actions']],
              [[2, 'mat-card-actions-align-end', null]],
              null,
              null,
              null,
              null
            )),
            t.rb(97, 16384, null, 0, x.b, [], null, null),
            (l()(), t.Jb(-1, null, ['\n    '])),
            (l()(),
            t.sb(
              99,
              0,
              null,
              null,
              2,
              'button',
              [['color', 'primary'], ['mat-raised-button', '']],
              [[8, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, e) {
                var t = !0;
                return 'click' === n && (t = !1 !== l.component.addStaff() && t), t;
              },
              w.b,
              w.a
            )),
            t.rb(100, 180224, null, 0, J.b, [t.k, _.a, A.g, [2, S.a]], { color: [0, 'color'] }, null),
            (l()(), t.Jb(-1, 0, ['Add staff'])),
            (l()(), t.Jb(-1, null, ['\n    '])),
            (l()(),
            t.sb(
              103,
              0,
              null,
              null,
              2,
              'button',
              [['color', 'primary'], ['mat-raised-button', '']],
              [[8, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, e) {
                var t = !0;
                return 'click' === n && (t = !1 !== l.component.permission() && t), t;
              },
              w.b,
              w.a
            )),
            t.rb(104, 180224, null, 0, J.b, [t.k, _.a, A.g, [2, S.a]], { color: [0, 'color'] }, null),
            (l()(), t.Jb(-1, 0, ['Permission Setting'])),
            (l()(), t.Jb(-1, null, ['\n  '])),
            (l()(), t.Jb(-1, 0, ['\n'])),
            (l()(), t.Jb(-1, null, ['\n']))
          ],
          function(l, n) {
            var e = n.component;
            l(n, 7, 0, e.staffs),
              l(n, 16, 0, 'name'),
              l(n, 34, 0, 'email'),
              l(n, 52, 0, 'phone'),
              l(n, 70, 0, 'permission'),
              l(n, 87, 0, e.displayedColumns),
              l(n, 91, 0, e.displayedColumns),
              l(n, 100, 0, 'primary'),
              l(n, 104, 0, 'primary');
          },
          function(l, n) {
            l(n, 96, 0, 'end' === t.Cb(n, 97).align),
              l(n, 99, 0, t.Cb(n, 100).disabled || null, 'NoopAnimations' === t.Cb(n, 100)._animationMode),
              l(n, 103, 0, t.Cb(n, 104).disabled || null, 'NoopAnimations' === t.Cb(n, 104)._animationMode);
          }
        );
      }
      function B(l) {
        return t.Lb(
          0,
          [
            (l()(), t.sb(0, 0, null, null, 1, 'app-staff-list', [], null, null, null, N, j)),
            t.rb(1, 114688, null, 0, L, [b.l, F], null, null)
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var T = t.ob('app-staff-list', L, B, {}, {}, []),
        U = e('de3e'),
        V = e('M2Lx'),
        Y = e('Wf4p'),
        $ = e('ZYjt'),
        W = e('gIcY'),
        X = t.qb({
          encapsulation: 2,
          styles: [
            '@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.91026}50%{animation-timing-function:cubic-bezier(0,0,.2,.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0,0,0,1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(.4,0,1,1);stroke-dashoffset:0}to{stroke-dashoffset:-22.91026}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}100%,32.8%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0,0,.2,.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}@media (-ms-high-contrast:active){.mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0,0,.2,.1),opacity 90ms cubic-bezier(0,0,.2,.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.91026;stroke-dasharray:22.91026;stroke-width:2.13333px}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0);border-radius:2px}@media (-ms-high-contrast:active){.mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0s mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0s mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:.3s linear 0s mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}'
          ],
          data: {}
        });
      function K(l) {
        return t.Lb(
          2,
          [
            t.Hb(402653184, 1, { _inputElement: 0 }),
            t.Hb(402653184, 2, { ripple: 0 }),
            (l()(),
            t.sb(
              2,
              0,
              [['label', 1]],
              null,
              16,
              'label',
              [['class', 'mat-checkbox-layout']],
              [[1, 'for', 0]],
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.sb(
              3,
              0,
              null,
              null,
              10,
              'div',
              [['class', 'mat-checkbox-inner-container']],
              [[2, 'mat-checkbox-inner-container-no-side-margin', null]],
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.sb(
              4,
              0,
              [[1, 0], ['input', 1]],
              null,
              0,
              'input',
              [['class', 'mat-checkbox-input cdk-visually-hidden'], ['type', 'checkbox']],
              [
                [8, 'id', 0],
                [8, 'required', 0],
                [8, 'checked', 0],
                [1, 'value', 0],
                [8, 'disabled', 0],
                [1, 'name', 0],
                [8, 'tabIndex', 0],
                [8, 'indeterminate', 0],
                [1, 'aria-label', 0],
                [1, 'aria-labelledby', 0],
                [1, 'aria-checked', 0]
              ],
              [[null, 'change'], [null, 'click']],
              function(l, n, e) {
                var t = !0,
                  a = l.component;
                return (
                  'change' === n && (t = !1 !== a._onInteractionEvent(e) && t),
                  'click' === n && (t = !1 !== a._onInputClick(e) && t),
                  t
                );
              },
              null,
              null
            )),
            (l()(),
            t.sb(
              5,
              0,
              null,
              null,
              3,
              'div',
              [['class', 'mat-checkbox-ripple mat-ripple'], ['matRipple', '']],
              [[2, 'mat-ripple-unbounded', null]],
              null,
              null,
              null,
              null
            )),
            t.rb(
              6,
              212992,
              [[2, 4]],
              0,
              Y.w,
              [t.k, t.B, _.a, [2, Y.m], [2, S.a]],
              {
                centered: [0, 'centered'],
                radius: [1, 'radius'],
                animation: [2, 'animation'],
                disabled: [3, 'disabled'],
                trigger: [4, 'trigger']
              },
              null
            ),
            t.Fb(7, { enterDuration: 0 }),
            (l()(),
            t.sb(
              8,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-ripple-element mat-checkbox-persistent-ripple']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.sb(9, 0, null, null, 0, 'div', [['class', 'mat-checkbox-frame']], null, null, null, null, null)),
            (l()(),
            t.sb(10, 0, null, null, 3, 'div', [['class', 'mat-checkbox-background']], null, null, null, null, null)),
            (l()(),
            t.sb(
              11,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [
                [':xml:space', 'preserve'],
                ['class', 'mat-checkbox-checkmark'],
                ['focusable', 'false'],
                ['version', '1.1'],
                ['viewBox', '0 0 24 24']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.sb(
              12,
              0,
              null,
              null,
              0,
              ':svg:path',
              [
                ['class', 'mat-checkbox-checkmark-path'],
                ['d', 'M4.1,12.7 9,17.6 20.3,6.3'],
                ['fill', 'none'],
                ['stroke', 'white']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.sb(13, 0, null, null, 0, 'div', [['class', 'mat-checkbox-mixedmark']], null, null, null, null, null)),
            (l()(),
            t.sb(
              14,
              0,
              [['checkboxLabel', 1]],
              null,
              4,
              'span',
              [['class', 'mat-checkbox-label']],
              null,
              [[null, 'cdkObserveContent']],
              function(l, n, e) {
                var t = !0;
                return 'cdkObserveContent' === n && (t = !1 !== l.component._onLabelTextChange() && t), t;
              },
              null,
              null
            )),
            t.rb(15, 1196032, null, 0, V.a, [V.b, t.k, t.B], null, { event: 'cdkObserveContent' }),
            (l()(), t.sb(16, 0, null, null, 1, 'span', [['style', 'display:none']], null, null, null, null, null)),
            (l()(), t.Jb(-1, null, ['\xa0'])),
            t.Bb(null, 0)
          ],
          function(l, n) {
            var e = n.component,
              a = l(n, 7, 0, 150);
            l(n, 6, 0, !0, 20, a, e._isRippleDisabled(), t.Cb(n, 2));
          },
          function(l, n) {
            var e = n.component;
            l(n, 2, 0, e.inputId),
              l(n, 3, 0, !t.Cb(n, 14).textContent || !t.Cb(n, 14).textContent.trim()),
              l(n, 4, 1, [
                e.inputId,
                e.required,
                e.checked,
                e.value,
                e.disabled,
                e.name,
                e.tabIndex,
                e.indeterminate,
                e.ariaLabel || null,
                e.ariaLabelledby,
                e._getAriaChecked()
              ]),
              l(n, 5, 0, t.Cb(n, 6).unbounded);
          }
        );
      }
      var Z = e('A7o+'),
        Q = e('p7/l'),
        ll = function() {
          return (ll =
            Object.assign ||
            function(l) {
              for (var n, e = 1, t = arguments.length; e < t; e++)
                for (var a in (n = arguments[e])) Object.prototype.hasOwnProperty.call(n, a) && (l[a] = n[a]);
              return l;
            }).apply(this, arguments);
        },
        nl = (function() {
          function l(l, n) {
            (this.permissionService = l),
              (this.router = n),
              (this.actionsList = [
                { action: 'AddUser', check: !1 },
                { action: 'EditUser', check: !1 },
                { action: 'DeleteUser', check: !1 },
                { action: 'FindAllUser', check: !1 },
                { action: 'FindOneUser', check: !1 },
                { action: 'AddCustomer', check: !1 },
                { action: 'EditCustomer', check: !1 },
                { action: 'DeleteCustomer', check: !1 },
                { action: 'FindAllCustomer', check: !1 },
                { action: 'FindOneCustomer', check: !1 }
              ]);
          }
          return (
            (l.prototype.ngOnInit = function() {
              var l = this;
              this.permissionService.find().subscribe(function(n) {
                var e = n.permissionDetail,
                  t = e.find(function(l) {
                    return 'Low' === l.level;
                  }),
                  a = e.find(function(l) {
                    return 'Medium' === l.level;
                  }),
                  u = e.find(function(l) {
                    return 'High' === l.level;
                  });
                (l.low = l.actionsList.map(function(l) {
                  return t && t.actions && t.actions.indexOf(l.action) >= 0 && (l.check = !0), ll({}, l);
                })),
                  (l.medium = l.actionsList.map(function(l) {
                    return a && a.actions && a.actions.indexOf(l.action) >= 0 && (l.check = !0), ll({}, l);
                  })),
                  (l.high = l.actionsList.map(function(l) {
                    return u && u.actions && u.actions.indexOf(l.action) >= 0 && (l.check = !0), ll({}, l);
                  }));
              });
            }),
            (l.prototype.save = function() {
              var l = this.low
                  .filter(function(l) {
                    return l.check;
                  })
                  .map(function(l) {
                    return l.action;
                  }),
                n = this.medium
                  .filter(function(l) {
                    return l.check;
                  })
                  .map(function(l) {
                    return l.action;
                  }),
                e = this.high
                  .filter(function(l) {
                    return l.check;
                  })
                  .map(function(l) {
                    return l.action;
                  });
              this.permissionService
                .update({
                  permissionDetail: [
                    { level: 'Low', actions: l },
                    { level: 'Medium', actions: n },
                    { level: 'High', actions: e }
                  ]
                })
                .subscribe(function(l) {
                  console.log(l);
                });
            }),
            (l.prototype.cancel = function() {
              this.router.navigate(['/staff']);
            }),
            l
          );
        })(),
        el = t.qb({
          encapsulation: 0,
          styles: [
            [
              '.fill[_ngcontent-%COMP%]{grid-gap:0;grid-template-columns:150px repeat(auto-fill,minmax(60px,1fr));grid-template-rows:repeat(11,1fr);grid-auto-flow:column}.fill[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{border:1px solid #000}.fill[_ngcontent-%COMP%]   .grid-header.first[_ngcontent-%COMP%]{grid-column:1}.fill[_ngcontent-%COMP%]   .grid-header.low[_ngcontent-%COMP%]{grid-column:2}.fill[_ngcontent-%COMP%]   .grid-header.medium[_ngcontent-%COMP%]{grid-column:3}.fill[_ngcontent-%COMP%]   .grid-header.high[_ngcontent-%COMP%]{grid-column:4}'
            ]
          ],
          data: {}
        });
      function tl(l) {
        return t.Lb(
          0,
          [
            (l()(), t.sb(0, 0, null, null, 8, null, null, null, null, null, null, null)),
            (l()(), t.Jb(-1, null, ['\n        '])),
            (l()(),
            t.sb(
              2,
              0,
              null,
              null,
              5,
              'mat-checkbox',
              [['class', 'text-center mat-checkbox']],
              [
                [8, 'id', 0],
                [1, 'tabindex', 0],
                [2, 'mat-checkbox-indeterminate', null],
                [2, 'mat-checkbox-checked', null],
                [2, 'mat-checkbox-disabled', null],
                [2, 'mat-checkbox-label-before', null],
                [2, '_mat-animation-noopable', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'ngModelChange']],
              function(l, n, e) {
                var t = !0;
                return 'ngModelChange' === n && (t = !1 !== (l.context.$implicit.check = e) && t), t;
              },
              K,
              X
            )),
            t.rb(3, 8568832, null, 0, U.b, [t.k, t.h, A.g, t.B, [8, null], [2, U.a], [2, S.a]], null, null),
            t.Gb(
              1024,
              null,
              W.j,
              function(l) {
                return [l];
              },
              [U.b]
            ),
            t.rb(
              5,
              671744,
              null,
              0,
              W.o,
              [[8, null], [8, null], [8, null], [6, W.j]],
              { model: [0, 'model'] },
              { update: 'ngModelChange' }
            ),
            t.Gb(2048, null, W.k, null, [W.o]),
            t.rb(7, 16384, null, 0, W.l, [[4, W.k]], null, null),
            (l()(), t.Jb(-1, null, ['\n      ']))
          ],
          function(l, n) {
            l(n, 5, 0, n.context.$implicit.check);
          },
          function(l, n) {
            l(n, 2, 1, [
              t.Cb(n, 3).id,
              null,
              t.Cb(n, 3).indeterminate,
              t.Cb(n, 3).checked,
              t.Cb(n, 3).disabled,
              'before' == t.Cb(n, 3).labelPosition,
              'NoopAnimations' === t.Cb(n, 3)._animationMode,
              t.Cb(n, 7).ngClassUntouched,
              t.Cb(n, 7).ngClassTouched,
              t.Cb(n, 7).ngClassPristine,
              t.Cb(n, 7).ngClassDirty,
              t.Cb(n, 7).ngClassValid,
              t.Cb(n, 7).ngClassInvalid,
              t.Cb(n, 7).ngClassPending
            ]);
          }
        );
      }
      function al(l) {
        return t.Lb(
          0,
          [
            (l()(), t.sb(0, 0, null, null, 8, null, null, null, null, null, null, null)),
            (l()(), t.Jb(-1, null, ['\n        '])),
            (l()(),
            t.sb(
              2,
              0,
              null,
              null,
              5,
              'mat-checkbox',
              [['class', 'text-center mat-checkbox']],
              [
                [8, 'id', 0],
                [1, 'tabindex', 0],
                [2, 'mat-checkbox-indeterminate', null],
                [2, 'mat-checkbox-checked', null],
                [2, 'mat-checkbox-disabled', null],
                [2, 'mat-checkbox-label-before', null],
                [2, '_mat-animation-noopable', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'ngModelChange']],
              function(l, n, e) {
                var t = !0;
                return 'ngModelChange' === n && (t = !1 !== (l.context.$implicit.check = e) && t), t;
              },
              K,
              X
            )),
            t.rb(3, 8568832, null, 0, U.b, [t.k, t.h, A.g, t.B, [8, null], [2, U.a], [2, S.a]], null, null),
            t.Gb(
              1024,
              null,
              W.j,
              function(l) {
                return [l];
              },
              [U.b]
            ),
            t.rb(
              5,
              671744,
              null,
              0,
              W.o,
              [[8, null], [8, null], [8, null], [6, W.j]],
              { model: [0, 'model'] },
              { update: 'ngModelChange' }
            ),
            t.Gb(2048, null, W.k, null, [W.o]),
            t.rb(7, 16384, null, 0, W.l, [[4, W.k]], null, null),
            (l()(), t.Jb(-1, null, ['\n      ']))
          ],
          function(l, n) {
            l(n, 5, 0, n.context.$implicit.check);
          },
          function(l, n) {
            l(n, 2, 1, [
              t.Cb(n, 3).id,
              null,
              t.Cb(n, 3).indeterminate,
              t.Cb(n, 3).checked,
              t.Cb(n, 3).disabled,
              'before' == t.Cb(n, 3).labelPosition,
              'NoopAnimations' === t.Cb(n, 3)._animationMode,
              t.Cb(n, 7).ngClassUntouched,
              t.Cb(n, 7).ngClassTouched,
              t.Cb(n, 7).ngClassPristine,
              t.Cb(n, 7).ngClassDirty,
              t.Cb(n, 7).ngClassValid,
              t.Cb(n, 7).ngClassInvalid,
              t.Cb(n, 7).ngClassPending
            ]);
          }
        );
      }
      function ul(l) {
        return t.Lb(
          0,
          [
            (l()(), t.sb(0, 0, null, null, 8, null, null, null, null, null, null, null)),
            (l()(), t.Jb(-1, null, ['\n        '])),
            (l()(),
            t.sb(
              2,
              0,
              null,
              null,
              5,
              'mat-checkbox',
              [['class', 'text-center mat-checkbox']],
              [
                [8, 'id', 0],
                [1, 'tabindex', 0],
                [2, 'mat-checkbox-indeterminate', null],
                [2, 'mat-checkbox-checked', null],
                [2, 'mat-checkbox-disabled', null],
                [2, 'mat-checkbox-label-before', null],
                [2, '_mat-animation-noopable', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'ngModelChange']],
              function(l, n, e) {
                var t = !0;
                return 'ngModelChange' === n && (t = !1 !== (l.context.$implicit.check = e) && t), t;
              },
              K,
              X
            )),
            t.rb(3, 8568832, null, 0, U.b, [t.k, t.h, A.g, t.B, [8, null], [2, U.a], [2, S.a]], null, null),
            t.Gb(
              1024,
              null,
              W.j,
              function(l) {
                return [l];
              },
              [U.b]
            ),
            t.rb(
              5,
              671744,
              null,
              0,
              W.o,
              [[8, null], [8, null], [8, null], [6, W.j]],
              { model: [0, 'model'] },
              { update: 'ngModelChange' }
            ),
            t.Gb(2048, null, W.k, null, [W.o]),
            t.rb(7, 16384, null, 0, W.l, [[4, W.k]], null, null),
            (l()(), t.Jb(-1, null, ['\n      ']))
          ],
          function(l, n) {
            l(n, 5, 0, n.context.$implicit.check);
          },
          function(l, n) {
            l(n, 2, 1, [
              t.Cb(n, 3).id,
              null,
              t.Cb(n, 3).indeterminate,
              t.Cb(n, 3).checked,
              t.Cb(n, 3).disabled,
              'before' == t.Cb(n, 3).labelPosition,
              'NoopAnimations' === t.Cb(n, 3)._animationMode,
              t.Cb(n, 7).ngClassUntouched,
              t.Cb(n, 7).ngClassTouched,
              t.Cb(n, 7).ngClassPristine,
              t.Cb(n, 7).ngClassDirty,
              t.Cb(n, 7).ngClassValid,
              t.Cb(n, 7).ngClassInvalid,
              t.Cb(n, 7).ngClassPending
            ]);
          }
        );
      }
      function il(l) {
        return t.Lb(
          0,
          [
            (l()(), t.sb(0, 0, null, null, 83, 'mat-card', [['class', 'm-1 mat-card']], null, null, null, k.d, k.a)),
            t.rb(1, 49152, null, 0, x.a, [], null, null),
            (l()(), t.Jb(-1, 0, ['\n  '])),
            (l()(),
            t.sb(3, 0, null, 0, 2, 'mat-card-header', [['class', 'mat-card-header']], null, null, null, k.c, k.b)),
            t.rb(4, 49152, null, 0, x.d, [], null, null),
            (l()(),
            t.Jb(-1, 2, [
              '\n    Setup which sections are accessible to each user permission level. All logged in staff can access the calendar, and\n    owner accounts have full system access.\n  '
            ])),
            (l()(), t.Jb(-1, 0, ['\n\n  '])),
            (l()(),
            t.sb(7, 0, null, 0, 55, 'mat-card-content', [['class', 'mat-card-content']], null, null, null, null, null)),
            t.rb(8, 16384, null, 0, x.c, [], null, null),
            (l()(), t.Jb(-1, null, ['\n    '])),
            (l()(), t.sb(10, 0, null, null, 51, 'section', [['class', 'grid fill']], null, null, null, null, null)),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.sb(12, 0, null, null, 0, 'div', [['class', 'grid-header first']], null, null, null, null, null)),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.sb(14, 0, null, null, 1, 'div', [['class', 'grid-header low']], null, null, null, null, null)),
            (l()(), t.Jb(-1, null, ['Low'])),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.sb(17, 0, null, null, 1, 'div', [['class', 'grid-header medium']], null, null, null, null, null)),
            (l()(), t.Jb(-1, null, ['Medium'])),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.sb(20, 0, null, null, 1, 'div', [['class', 'grid-header high']], null, null, null, null, null)),
            (l()(), t.Jb(-1, null, ['High'])),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.sb(23, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (l()(), t.Jb(-1, null, ['Add Staffs'])),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.sb(26, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (l()(), t.Jb(-1, null, ['Edit Staffs'])),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.sb(29, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (l()(), t.Jb(-1, null, ['Delete Staffs'])),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.sb(32, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (l()(), t.Jb(-1, null, ['Find All Staffs'])),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.sb(35, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (l()(), t.Jb(-1, null, ['Find One Staff'])),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.sb(38, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (l()(), t.Jb(-1, null, ['Add Customers'])),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.sb(41, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (l()(), t.Jb(-1, null, ['Edit Customers'])),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.sb(44, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (l()(), t.Jb(-1, null, ['Delete Customers'])),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.sb(47, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (l()(), t.Jb(-1, null, ['Find All Customers'])),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.sb(50, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (l()(), t.Jb(-1, null, ['Find One Customer'])),
            (l()(), t.Jb(-1, null, ['\n\n      '])),
            (l()(), t.jb(16777216, null, null, 1, null, tl)),
            t.rb(54, 278528, null, 0, y.j, [t.R, t.O, t.u], { ngForOf: [0, 'ngForOf'] }, null),
            (l()(), t.Jb(-1, null, ['\n\n      '])),
            (l()(), t.jb(16777216, null, null, 1, null, al)),
            t.rb(57, 278528, null, 0, y.j, [t.R, t.O, t.u], { ngForOf: [0, 'ngForOf'] }, null),
            (l()(), t.Jb(-1, null, ['\n\n      '])),
            (l()(), t.jb(16777216, null, null, 1, null, ul)),
            t.rb(60, 278528, null, 0, y.j, [t.R, t.O, t.u], { ngForOf: [0, 'ngForOf'] }, null),
            (l()(), t.Jb(-1, null, ['\n    '])),
            (l()(), t.Jb(-1, null, ['\n  '])),
            (l()(), t.Jb(-1, 0, ['\n  '])),
            (l()(),
            t.sb(
              64,
              0,
              null,
              0,
              18,
              'mat-card-actions',
              [['class', 'mat-card-actions']],
              [[2, 'mat-card-actions-align-end', null]],
              null,
              null,
              null,
              null
            )),
            t.rb(65, 16384, null, 0, x.b, [], null, null),
            (l()(), t.Jb(-1, null, ['\n    '])),
            (l()(),
            t.sb(
              67,
              0,
              null,
              null,
              6,
              'button',
              [['mat-raised-button', ''], ['type', 'button']],
              [[8, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, e) {
                var t = !0;
                return 'click' === n && (t = !1 !== l.component.cancel() && t), t;
              },
              w.b,
              w.a
            )),
            t.rb(68, 180224, null, 0, J.b, [t.k, _.a, A.g, [2, S.a]], null, null),
            (l()(), t.Jb(-1, 0, ['\n      '])),
            (l()(), t.sb(70, 0, null, 0, 2, 'span', [['translate', '']], null, null, null, null, null)),
            t.rb(71, 8536064, null, 0, Z.e, [Z.l, t.k, t.h], { translate: [0, 'translate'] }, null),
            (l()(), t.Jb(-1, null, ['Cancel'])),
            (l()(), t.Jb(-1, 0, ['\n    '])),
            (l()(), t.Jb(-1, null, ['\n    '])),
            (l()(),
            t.sb(
              75,
              0,
              null,
              null,
              6,
              'button',
              [['color', 'primary'], ['mat-raised-button', '']],
              [[8, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, e) {
                var t = !0;
                return 'click' === n && (t = !1 !== l.component.save() && t), t;
              },
              w.b,
              w.a
            )),
            t.rb(76, 180224, null, 0, J.b, [t.k, _.a, A.g, [2, S.a]], { color: [0, 'color'] }, null),
            (l()(), t.Jb(-1, 0, ['\n      '])),
            (l()(), t.sb(78, 0, null, 0, 2, 'span', [['translate', '']], null, null, null, null, null)),
            t.rb(79, 8536064, null, 0, Z.e, [Z.l, t.k, t.h], { translate: [0, 'translate'] }, null),
            (l()(), t.Jb(-1, null, ['Save'])),
            (l()(), t.Jb(-1, 0, ['\n    '])),
            (l()(), t.Jb(-1, null, ['\n  '])),
            (l()(), t.Jb(-1, 0, ['\n'])),
            (l()(), t.Jb(-1, null, ['\n']))
          ],
          function(l, n) {
            var e = n.component;
            l(n, 54, 0, e.low),
              l(n, 57, 0, e.medium),
              l(n, 60, 0, e.high),
              l(n, 71, 0, ''),
              l(n, 76, 0, 'primary'),
              l(n, 79, 0, '');
          },
          function(l, n) {
            l(n, 64, 0, 'end' === t.Cb(n, 65).align),
              l(n, 67, 0, t.Cb(n, 68).disabled || null, 'NoopAnimations' === t.Cb(n, 68)._animationMode),
              l(n, 75, 0, t.Cb(n, 76).disabled || null, 'NoopAnimations' === t.Cb(n, 76)._animationMode);
          }
        );
      }
      function ol(l) {
        return t.Lb(
          0,
          [
            (l()(), t.sb(0, 0, null, null, 1, 'app-permission', [], null, null, null, il, el)),
            t.rb(1, 114688, null, 0, nl, [Q.a, b.l], null, null)
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var rl = t.ob('app-permission', nl, ol, {}, {}, []),
        cl = e('seP3'),
        bl = e('MlvX'),
        sl = e('dJrM'),
        dl = e('uGex'),
        ml = e('eDkP'),
        pl = e('4c35'),
        hl = e('qAlS'),
        fl = t.qb({
          encapsulation: 2,
          styles: [
            '.mat-select{display:inline-block;width:100%;outline:0}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform .4s cubic-bezier(.25,.8,.25,1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px}@media (-ms-high-contrast:active){.mat-select-panel{outline:solid 1px}}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}'
          ],
          data: {
            animation: [
              {
                type: 7,
                name: 'transformPanelWrap',
                definitions: [
                  {
                    type: 1,
                    expr: '* => void',
                    animation: {
                      type: 11,
                      selector: '@transformPanel',
                      animation: [{ type: 9, options: null }],
                      options: { optional: !0 }
                    },
                    options: null
                  }
                ],
                options: {}
              },
              {
                type: 7,
                name: 'transformPanel',
                definitions: [
                  {
                    type: 0,
                    name: 'void',
                    styles: {
                      type: 6,
                      styles: { transform: 'scaleY(0.8)', minWidth: '100%', opacity: 0 },
                      offset: null
                    },
                    options: void 0
                  },
                  {
                    type: 0,
                    name: 'showing',
                    styles: {
                      type: 6,
                      styles: { opacity: 1, minWidth: 'calc(100% + 32px)', transform: 'scaleY(1)' },
                      offset: null
                    },
                    options: void 0
                  },
                  {
                    type: 0,
                    name: 'showing-multiple',
                    styles: {
                      type: 6,
                      styles: { opacity: 1, minWidth: 'calc(100% + 64px)', transform: 'scaleY(1)' },
                      offset: null
                    },
                    options: void 0
                  },
                  {
                    type: 1,
                    expr: 'void => *',
                    animation: { type: 4, styles: null, timings: '120ms cubic-bezier(0, 0, 0.2, 1)' },
                    options: null
                  },
                  {
                    type: 1,
                    expr: '* => void',
                    animation: {
                      type: 4,
                      styles: { type: 6, styles: { opacity: 0 }, offset: null },
                      timings: '100ms 25ms linear'
                    },
                    options: null
                  }
                ],
                options: {}
              }
            ]
          }
        });
      function gl(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(0, 0, null, null, 1, 'span', [['class', 'mat-select-placeholder']], null, null, null, null, null)),
            (l()(), t.Jb(1, null, ['', '']))
          ],
          null,
          function(l, n) {
            l(n, 1, 0, n.component.placeholder || '\xa0');
          }
        );
      }
      function Cl(l) {
        return t.Lb(
          0,
          [
            (l()(), t.sb(0, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (l()(), t.Jb(1, null, ['', '']))
          ],
          null,
          function(l, n) {
            l(n, 1, 0, n.component.triggerValue || '\xa0');
          }
        );
      }
      function kl(l) {
        return t.Lb(0, [t.Bb(null, 0), (l()(), t.jb(0, null, null, 0))], null, null);
      }
      function xl(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(0, 0, null, null, 5, 'span', [['class', 'mat-select-value-text']], null, null, null, null, null)),
            t.rb(1, 16384, null, 0, y.o, [], { ngSwitch: [0, 'ngSwitch'] }, null),
            (l()(), t.jb(16777216, null, null, 1, null, Cl)),
            t.rb(3, 16384, null, 0, y.q, [t.R, t.O, y.o], null, null),
            (l()(), t.jb(16777216, null, null, 1, null, kl)),
            t.rb(5, 278528, null, 0, y.p, [t.R, t.O, y.o], { ngSwitchCase: [0, 'ngSwitchCase'] }, null)
          ],
          function(l, n) {
            l(n, 1, 0, !!n.component.customTrigger), l(n, 5, 0, !0);
          },
          null
        );
      }
      function vl(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
              0,
              0,
              null,
              null,
              3,
              'div',
              [['class', 'mat-select-panel-wrap']],
              [[24, '@transformPanelWrap', 0]],
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.sb(
              1,
              0,
              [[2, 0], ['panel', 1]],
              null,
              2,
              'div',
              [],
              [[24, '@transformPanel', 0], [4, 'transformOrigin', null], [4, 'font-size', 'px']],
              [[null, '@transformPanel.done'], [null, 'keydown']],
              function(l, n, e) {
                var t = !0,
                  a = l.component;
                return (
                  '@transformPanel.done' === n && (t = !1 !== a._panelDoneAnimatingStream.next(e.toState) && t),
                  'keydown' === n && (t = !1 !== a._handleKeydown(e) && t),
                  t
                );
              },
              null,
              null
            )),
            t.rb(2, 278528, null, 0, y.i, [t.u, t.v, t.k, t.G], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
            t.Bb(null, 1)
          ],
          function(l, n) {
            var e = n.component;
            l(n, 2, 0, t.ub(1, 'mat-select-panel ', e._getPanelTheme(), ''), e.panelClass);
          },
          function(l, n) {
            var e = n.component;
            l(n, 0, 0, void 0),
              l(n, 1, 0, e.multiple ? 'showing-multiple' : 'showing', e._transformOrigin, e._triggerFontSize);
          }
        );
      }
      function yl(l) {
        return t.Lb(
          2,
          [
            t.Hb(402653184, 1, { trigger: 0 }),
            t.Hb(671088640, 2, { panel: 0 }),
            t.Hb(402653184, 3, { overlayDir: 0 }),
            (l()(),
            t.sb(
              3,
              0,
              [[1, 0], ['trigger', 1]],
              null,
              10,
              'div',
              [['aria-hidden', 'true'], ['cdk-overlay-origin', ''], ['class', 'mat-select-trigger']],
              null,
              [[null, 'click']],
              function(l, n, e) {
                var t = !0;
                return 'click' === n && (t = !1 !== l.component.toggle() && t), t;
              },
              null,
              null
            )),
            t.rb(4, 16384, [['origin', 4]], 0, ml.b, [t.k], null, null),
            (l()(), t.sb(5, 0, null, null, 6, 'div', [['class', 'mat-select-value']], null, null, null, null, null)),
            t.rb(6, 16384, null, 0, y.o, [], { ngSwitch: [0, 'ngSwitch'] }, null),
            (l()(), t.jb(16777216, null, null, 1, null, gl)),
            t.rb(8, 278528, null, 0, y.p, [t.R, t.O, y.o], { ngSwitchCase: [0, 'ngSwitchCase'] }, null),
            (l()(), t.Jb(-1, null, [' '])),
            (l()(), t.jb(16777216, null, null, 1, null, xl)),
            t.rb(11, 278528, null, 0, y.p, [t.R, t.O, y.o], { ngSwitchCase: [0, 'ngSwitchCase'] }, null),
            (l()(),
            t.sb(12, 0, null, null, 1, 'div', [['class', 'mat-select-arrow-wrapper']], null, null, null, null, null)),
            (l()(), t.sb(13, 0, null, null, 0, 'div', [['class', 'mat-select-arrow']], null, null, null, null, null)),
            (l()(),
            t.jb(
              16777216,
              null,
              null,
              1,
              function(l, n, e) {
                var t = !0,
                  a = l.component;
                return (
                  'backdropClick' === n && (t = !1 !== a.close() && t),
                  'attach' === n && (t = !1 !== a._onAttached() && t),
                  'detach' === n && (t = !1 !== a.close() && t),
                  t
                );
              },
              vl
            )),
            t.rb(
              15,
              671744,
              [[3, 4]],
              0,
              ml.a,
              [ml.c, t.O, t.R, ml.j, [2, v.b]],
              {
                origin: [0, 'origin'],
                positions: [1, 'positions'],
                offsetY: [2, 'offsetY'],
                minWidth: [3, 'minWidth'],
                backdropClass: [4, 'backdropClass'],
                scrollStrategy: [5, 'scrollStrategy'],
                open: [6, 'open'],
                hasBackdrop: [7, 'hasBackdrop'],
                lockPosition: [8, 'lockPosition']
              },
              { backdropClick: 'backdropClick', attach: 'attach', detach: 'detach' }
            )
          ],
          function(l, n) {
            var e = n.component;
            l(n, 6, 0, e.empty),
              l(n, 8, 0, !0),
              l(n, 11, 0, !1),
              l(
                n,
                15,
                0,
                t.Cb(n, 4),
                e._positions,
                e._offsetY,
                null == e._triggerRect ? null : e._triggerRect.width,
                'cdk-overlay-transparent-backdrop',
                e._scrollStrategy,
                e.panelOpen,
                '',
                ''
              );
          },
          null
        );
      }
      var _l = e('b716'),
        wl = e('/VYK'),
        Jl = e('zgJ7'),
        Al = e('o7am'),
        Sl = (function() {
          function l(l, n, e, t) {
            (this.formBuilder = l),
              (this.router = n),
              (this.activatedRoute = e),
              (this.staffService = t),
              (this.isLoading = !1),
              (this.isOwner = !1),
              (this.permissions = ['Low', 'Medium', 'High']),
              (this.isEditMode = !1),
              this.createForm();
          }
          return (
            (l.prototype.ngOnInit = function() {
              var l = this;
              this.activatedRoute.params.subscribe(function(n) {
                n && n.id && ((l.isEditMode = !0), l.findById(n.id));
              });
            }),
            (l.prototype.submit = function() {
              var l = this,
                n = this.submitForm.value;
              return this.isEditMode
                ? this.staffService.update(n, n.id).subscribe(function(n) {
                    console.log(n), l.cancel();
                  })
                : ((n.password = '1'),
                  this.staffService.create(n).subscribe(function(n) {
                    console.log(n), l.cancel();
                  }));
            }),
            (l.prototype.findById = function(l) {
              var n = this;
              this.staffService.findById(l).subscribe(function(l) {
                var e = l._id,
                  t = l.name,
                  a = l.email,
                  u = l.phone,
                  i = l.permission;
                (n.isOwner = 'Owner' === l.role),
                  n.submitForm.patchValue({ id: e, name: t, email: a, permission: i, phone: u });
              });
            }),
            (l.prototype.createForm = function() {
              this.submitForm = this.formBuilder.group({
                id: [''],
                name: ['', W.r.required],
                email: ['', [W.r.required, W.r.email]],
                permission: [''],
                phone: ['']
              });
            }),
            (l.prototype.cancel = function() {
              this.router.navigate(['/staff']);
            }),
            (l.prototype.delete = function() {
              var l = this;
              this.staffService.delete(this.submitForm.value.id).subscribe(function(n) {
                l.cancel();
              });
            }),
            l
          );
        })(),
        Ol = t.qb({ encapsulation: 0, styles: [['']], data: {} });
      function Fl(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
              0,
              0,
              null,
              null,
              6,
              'mat-error',
              [['class', 'mat-error'], ['role', 'alert']],
              [[1, 'id', 0]],
              null,
              null,
              null,
              null
            )),
            t.rb(1, 16384, [[4, 4]], 0, cl.b, [], null, null),
            (l()(), t.Jb(-1, null, ['\n            '])),
            (l()(), t.sb(3, 0, null, null, 2, 'span', [['translate', '']], null, null, null, null, null)),
            t.rb(4, 8536064, null, 0, Z.e, [Z.l, t.k, t.h], { translate: [0, 'translate'] }, null),
            (l()(), t.Jb(-1, null, ['Staff Name is required'])),
            (l()(), t.Jb(-1, null, ['\n          ']))
          ],
          function(l, n) {
            l(n, 4, 0, '');
          },
          function(l, n) {
            l(n, 0, 0, t.Cb(n, 1).id);
          }
        );
      }
      function Ll(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
              0,
              0,
              null,
              null,
              6,
              'mat-error',
              [['class', 'mat-error'], ['role', 'alert']],
              [[1, 'id', 0]],
              null,
              null,
              null,
              null
            )),
            t.rb(1, 16384, [[11, 4]], 0, cl.b, [], null, null),
            (l()(), t.Jb(-1, null, ['\n            '])),
            (l()(), t.sb(3, 0, null, null, 2, 'span', [['translate', '']], null, null, null, null, null)),
            t.rb(4, 8536064, null, 0, Z.e, [Z.l, t.k, t.h], { translate: [0, 'translate'] }, null),
            (l()(), t.Jb(-1, null, ['Not a valid email'])),
            (l()(), t.Jb(-1, null, ['\n          ']))
          ],
          function(l, n) {
            l(n, 4, 0, '');
          },
          function(l, n) {
            l(n, 0, 0, t.Cb(n, 1).id);
          }
        );
      }
      function jl(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
              0,
              0,
              null,
              null,
              2,
              'mat-option',
              [['class', 'mat-option'], ['role', 'option']],
              [
                [1, 'tabindex', 0],
                [2, 'mat-selected', null],
                [2, 'mat-option-multiple', null],
                [2, 'mat-active', null],
                [8, 'id', 0],
                [1, 'aria-selected', 0],
                [1, 'aria-disabled', 0],
                [2, 'mat-option-disabled', null]
              ],
              [[null, 'click'], [null, 'keydown']],
              function(l, n, e) {
                var a = !0;
                return (
                  'click' === n && (a = !1 !== t.Cb(l, 1)._selectViaInteraction() && a),
                  'keydown' === n && (a = !1 !== t.Cb(l, 1)._handleKeydown(e) && a),
                  a
                );
              },
              bl.c,
              bl.a
            )),
            t.rb(1, 8568832, [[29, 4]], 0, Y.r, [t.k, t.h, [2, Y.l], [2, Y.q]], { value: [0, 'value'] }, null),
            (l()(), t.Jb(2, 0, ['', '']))
          ],
          function(l, n) {
            l(n, 1, 0, n.context.$implicit);
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              t.Cb(n, 1)._getTabIndex(),
              t.Cb(n, 1).selected,
              t.Cb(n, 1).multiple,
              t.Cb(n, 1).active,
              t.Cb(n, 1).id,
              t.Cb(n, 1).selected.toString(),
              t.Cb(n, 1).disabled.toString(),
              t.Cb(n, 1).disabled
            ),
              l(n, 2, 0, n.context.$implicit);
          }
        );
      }
      function Hl(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
              0,
              0,
              null,
              null,
              24,
              'mat-form-field',
              [['class', 'mat-form-field']],
              [
                [2, 'mat-form-field-appearance-standard', null],
                [2, 'mat-form-field-appearance-fill', null],
                [2, 'mat-form-field-appearance-outline', null],
                [2, 'mat-form-field-appearance-legacy', null],
                [2, 'mat-form-field-invalid', null],
                [2, 'mat-form-field-can-float', null],
                [2, 'mat-form-field-should-float', null],
                [2, 'mat-form-field-has-label', null],
                [2, 'mat-form-field-hide-placeholder', null],
                [2, 'mat-form-field-disabled', null],
                [2, 'mat-form-field-autofilled', null],
                [2, 'mat-focused', null],
                [2, 'mat-accent', null],
                [2, 'mat-warn', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
                [2, '_mat-animation-noopable', null]
              ],
              null,
              null,
              sl.b,
              sl.a
            )),
            t.rb(1, 7520256, null, 7, cl.c, [t.k, t.h, [2, Y.j], [2, v.b], [2, cl.a], _.a, t.B, [2, S.a]], null, null),
            t.Hb(335544320, 22, { _control: 0 }),
            t.Hb(335544320, 23, { _placeholderChild: 0 }),
            t.Hb(335544320, 24, { _labelChild: 0 }),
            t.Hb(603979776, 25, { _errorChildren: 1 }),
            t.Hb(603979776, 26, { _hintChildren: 1 }),
            t.Hb(603979776, 27, { _prefixChildren: 1 }),
            t.Hb(603979776, 28, { _suffixChildren: 1 }),
            (l()(), t.Jb(-1, 1, ['\n          '])),
            (l()(),
            t.sb(
              10,
              0,
              null,
              1,
              13,
              'mat-select',
              [
                ['class', 'mat-select'],
                ['formControlName', 'permission'],
                ['placeholder', 'User Permission'],
                ['role', 'listbox']
              ],
              [
                [1, 'id', 0],
                [1, 'tabindex', 0],
                [1, 'aria-label', 0],
                [1, 'aria-labelledby', 0],
                [1, 'aria-required', 0],
                [1, 'aria-disabled', 0],
                [1, 'aria-invalid', 0],
                [1, 'aria-owns', 0],
                [1, 'aria-multiselectable', 0],
                [1, 'aria-describedby', 0],
                [1, 'aria-activedescendant', 0],
                [2, 'mat-select-disabled', null],
                [2, 'mat-select-invalid', null],
                [2, 'mat-select-required', null],
                [2, 'mat-select-empty', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'keydown'], [null, 'focus'], [null, 'blur']],
              function(l, n, e) {
                var a = !0;
                return (
                  'keydown' === n && (a = !1 !== t.Cb(l, 14)._handleKeydown(e) && a),
                  'focus' === n && (a = !1 !== t.Cb(l, 14)._onFocus() && a),
                  'blur' === n && (a = !1 !== t.Cb(l, 14)._onBlur() && a),
                  a
                );
              },
              yl,
              fl
            )),
            t.Gb(6144, null, Y.l, null, [dl.c]),
            t.rb(
              12,
              671744,
              null,
              0,
              W.f,
              [[3, W.c], [8, null], [8, null], [8, null], [2, W.v]],
              { name: [0, 'name'] },
              null
            ),
            t.Gb(2048, null, W.k, null, [W.f]),
            t.rb(
              14,
              2080768,
              null,
              3,
              dl.c,
              [hl.e, t.h, t.B, Y.d, t.k, [2, v.b], [2, W.n], [2, W.g], [2, cl.c], [6, W.k], [8, null], dl.a, A.i],
              { placeholder: [0, 'placeholder'] },
              null
            ),
            t.Hb(603979776, 29, { options: 1 }),
            t.Hb(603979776, 30, { optionGroups: 1 }),
            t.Hb(335544320, 31, { customTrigger: 0 }),
            t.rb(18, 16384, null, 0, W.l, [[4, W.k]], null, null),
            t.Gb(2048, [[22, 4]], cl.d, null, [dl.c]),
            (l()(), t.Jb(-1, 1, ['\n            '])),
            (l()(), t.jb(16777216, null, 1, 1, null, jl)),
            t.rb(22, 278528, null, 0, y.j, [t.R, t.O, t.u], { ngForOf: [0, 'ngForOf'] }, null),
            (l()(), t.Jb(-1, 1, ['\n          '])),
            (l()(), t.Jb(-1, 1, ['\n        ']))
          ],
          function(l, n) {
            var e = n.component;
            l(n, 12, 0, 'permission'), l(n, 14, 0, 'User Permission'), l(n, 22, 0, e.permissions);
          },
          function(l, n) {
            l(n, 0, 1, [
              'standard' == t.Cb(n, 1).appearance,
              'fill' == t.Cb(n, 1).appearance,
              'outline' == t.Cb(n, 1).appearance,
              'legacy' == t.Cb(n, 1).appearance,
              t.Cb(n, 1)._control.errorState,
              t.Cb(n, 1)._canLabelFloat,
              t.Cb(n, 1)._shouldLabelFloat(),
              t.Cb(n, 1)._hasFloatingLabel(),
              t.Cb(n, 1)._hideControlPlaceholder(),
              t.Cb(n, 1)._control.disabled,
              t.Cb(n, 1)._control.autofilled,
              t.Cb(n, 1)._control.focused,
              'accent' == t.Cb(n, 1).color,
              'warn' == t.Cb(n, 1).color,
              t.Cb(n, 1)._shouldForward('untouched'),
              t.Cb(n, 1)._shouldForward('touched'),
              t.Cb(n, 1)._shouldForward('pristine'),
              t.Cb(n, 1)._shouldForward('dirty'),
              t.Cb(n, 1)._shouldForward('valid'),
              t.Cb(n, 1)._shouldForward('invalid'),
              t.Cb(n, 1)._shouldForward('pending'),
              !t.Cb(n, 1)._animationsEnabled
            ]),
              l(n, 10, 1, [
                t.Cb(n, 14).id,
                t.Cb(n, 14).tabIndex,
                t.Cb(n, 14)._getAriaLabel(),
                t.Cb(n, 14)._getAriaLabelledby(),
                t.Cb(n, 14).required.toString(),
                t.Cb(n, 14).disabled.toString(),
                t.Cb(n, 14).errorState,
                t.Cb(n, 14).panelOpen ? t.Cb(n, 14)._optionIds : null,
                t.Cb(n, 14).multiple,
                t.Cb(n, 14)._ariaDescribedby || null,
                t.Cb(n, 14)._getAriaActiveDescendant(),
                t.Cb(n, 14).disabled,
                t.Cb(n, 14).errorState,
                t.Cb(n, 14).required,
                t.Cb(n, 14).empty,
                t.Cb(n, 18).ngClassUntouched,
                t.Cb(n, 18).ngClassTouched,
                t.Cb(n, 18).ngClassPristine,
                t.Cb(n, 18).ngClassDirty,
                t.Cb(n, 18).ngClassValid,
                t.Cb(n, 18).ngClassInvalid,
                t.Cb(n, 18).ngClassPending
              ]);
          }
        );
      }
      function Pl(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
              0,
              0,
              null,
              null,
              6,
              'button',
              [['color', 'warn'], ['mat-raised-button', ''], ['type', 'button']],
              [[8, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, e) {
                var t = !0;
                return 'click' === n && (t = !1 !== l.component.delete() && t), t;
              },
              w.b,
              w.a
            )),
            t.rb(1, 180224, null, 0, J.b, [t.k, _.a, A.g, [2, S.a]], { color: [0, 'color'] }, null),
            (l()(), t.Jb(-1, 0, ['\n          '])),
            (l()(), t.sb(3, 0, null, 0, 2, 'span', [['translate', '']], null, null, null, null, null)),
            t.rb(4, 8536064, null, 0, Z.e, [Z.l, t.k, t.h], { translate: [0, 'translate'] }, null),
            (l()(), t.Jb(-1, null, ['Delete'])),
            (l()(), t.Jb(-1, 0, ['\n        ']))
          ],
          function(l, n) {
            l(n, 1, 0, 'warn'), l(n, 4, 0, '');
          },
          function(l, n) {
            l(n, 0, 0, t.Cb(n, 1).disabled || null, 'NoopAnimations' === t.Cb(n, 1)._animationMode);
          }
        );
      }
      function Ml(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
              0,
              0,
              null,
              null,
              117,
              'form',
              [['novalidate', '']],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'ngSubmit'], [null, 'submit'], [null, 'reset']],
              function(l, n, e) {
                var a = !0,
                  u = l.component;
                return (
                  'submit' === n && (a = !1 !== t.Cb(l, 2).onSubmit(e) && a),
                  'reset' === n && (a = !1 !== t.Cb(l, 2).onReset() && a),
                  'ngSubmit' === n && (a = !1 !== u.submit() && a),
                  a
                );
              },
              null,
              null
            )),
            t.rb(1, 16384, null, 0, W.t, [], null, null),
            t.rb(2, 540672, null, 0, W.g, [[8, null], [8, null]], { form: [0, 'form'] }, { ngSubmit: 'ngSubmit' }),
            t.Gb(2048, null, W.c, null, [W.g]),
            t.rb(4, 16384, null, 0, W.m, [[4, W.c]], null, null),
            (l()(), t.Jb(-1, null, ['\n  '])),
            (l()(), t.sb(6, 0, null, null, 110, 'mat-card', [['class', 'm-1 mat-card']], null, null, null, k.d, k.a)),
            t.rb(7, 49152, null, 0, x.a, [], null, null),
            (l()(), t.Jb(-1, 0, ['\n    '])),
            (l()(),
            t.sb(9, 0, null, 0, 77, 'mat-card-content', [['class', 'mat-card-content']], null, null, null, null, null)),
            t.rb(10, 16384, null, 0, x.c, [], null, null),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.sb(12, 0, null, null, 73, 'div', [['class', 'grid form']], null, null, null, null, null)),
            (l()(), t.Jb(-1, null, ['\n        '])),
            (l()(),
            t.sb(
              14,
              0,
              null,
              null,
              22,
              'mat-form-field',
              [['class', 'mat-form-field']],
              [
                [2, 'mat-form-field-appearance-standard', null],
                [2, 'mat-form-field-appearance-fill', null],
                [2, 'mat-form-field-appearance-outline', null],
                [2, 'mat-form-field-appearance-legacy', null],
                [2, 'mat-form-field-invalid', null],
                [2, 'mat-form-field-can-float', null],
                [2, 'mat-form-field-should-float', null],
                [2, 'mat-form-field-has-label', null],
                [2, 'mat-form-field-hide-placeholder', null],
                [2, 'mat-form-field-disabled', null],
                [2, 'mat-form-field-autofilled', null],
                [2, 'mat-focused', null],
                [2, 'mat-accent', null],
                [2, 'mat-warn', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
                [2, '_mat-animation-noopable', null]
              ],
              null,
              null,
              sl.b,
              sl.a
            )),
            t.rb(15, 7520256, null, 7, cl.c, [t.k, t.h, [2, Y.j], [2, v.b], [2, cl.a], _.a, t.B, [2, S.a]], null, null),
            t.Hb(335544320, 1, { _control: 0 }),
            t.Hb(335544320, 2, { _placeholderChild: 0 }),
            t.Hb(335544320, 3, { _labelChild: 0 }),
            t.Hb(603979776, 4, { _errorChildren: 1 }),
            t.Hb(603979776, 5, { _hintChildren: 1 }),
            t.Hb(603979776, 6, { _prefixChildren: 1 }),
            t.Hb(603979776, 7, { _suffixChildren: 1 }),
            (l()(), t.Jb(-1, 1, ['\n          '])),
            (l()(),
            t.sb(
              24,
              0,
              null,
              1,
              8,
              'input',
              [
                ['autocomplete', 'name'],
                ['class', 'mat-input-element mat-form-field-autofill-control'],
                ['formControlName', 'name'],
                ['matInput', ''],
                ['type', 'text']
              ],
              [
                [2, 'mat-input-server', null],
                [1, 'id', 0],
                [1, 'placeholder', 0],
                [8, 'disabled', 0],
                [8, 'required', 0],
                [1, 'readonly', 0],
                [1, 'aria-describedby', 0],
                [1, 'aria-invalid', 0],
                [1, 'aria-required', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'input'], [null, 'blur'], [null, 'compositionstart'], [null, 'compositionend'], [null, 'focus']],
              function(l, n, e) {
                var a = !0;
                return (
                  'input' === n && (a = !1 !== t.Cb(l, 25)._handleInput(e.target.value) && a),
                  'blur' === n && (a = !1 !== t.Cb(l, 25).onTouched() && a),
                  'compositionstart' === n && (a = !1 !== t.Cb(l, 25)._compositionStart() && a),
                  'compositionend' === n && (a = !1 !== t.Cb(l, 25)._compositionEnd(e.target.value) && a),
                  'blur' === n && (a = !1 !== t.Cb(l, 29)._focusChanged(!1) && a),
                  'focus' === n && (a = !1 !== t.Cb(l, 29)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== t.Cb(l, 29)._onInput() && a),
                  a
                );
              },
              null,
              null
            )),
            t.rb(25, 16384, null, 0, W.d, [t.G, t.k, [2, W.a]], null, null),
            t.Gb(
              1024,
              null,
              W.j,
              function(l) {
                return [l];
              },
              [W.d]
            ),
            t.rb(
              27,
              671744,
              null,
              0,
              W.f,
              [[3, W.c], [8, null], [8, null], [6, W.j], [2, W.v]],
              { name: [0, 'name'] },
              null
            ),
            t.Gb(2048, null, W.k, null, [W.f]),
            t.rb(
              29,
              999424,
              null,
              0,
              _l.a,
              [t.k, _.a, [6, W.k], [2, W.n], [2, W.g], Y.d, [8, null], wl.a, t.B],
              { placeholder: [0, 'placeholder'], type: [1, 'type'] },
              null
            ),
            t.Eb(131072, Z.k, [Z.l, t.h]),
            t.rb(31, 16384, null, 0, W.l, [[4, W.k]], null, null),
            t.Gb(2048, [[1, 4]], cl.d, null, [_l.a]),
            (l()(), t.Jb(-1, 1, ['\n          '])),
            (l()(), t.jb(16777216, null, 5, 1, null, Fl)),
            t.rb(35, 16384, null, 0, y.k, [t.R, t.O], { ngIf: [0, 'ngIf'] }, null),
            (l()(), t.Jb(-1, 1, ['\n        '])),
            (l()(), t.Jb(-1, null, ['\n\n        '])),
            (l()(),
            t.sb(
              38,
              0,
              null,
              null,
              22,
              'mat-form-field',
              [['class', 'mat-form-field']],
              [
                [2, 'mat-form-field-appearance-standard', null],
                [2, 'mat-form-field-appearance-fill', null],
                [2, 'mat-form-field-appearance-outline', null],
                [2, 'mat-form-field-appearance-legacy', null],
                [2, 'mat-form-field-invalid', null],
                [2, 'mat-form-field-can-float', null],
                [2, 'mat-form-field-should-float', null],
                [2, 'mat-form-field-has-label', null],
                [2, 'mat-form-field-hide-placeholder', null],
                [2, 'mat-form-field-disabled', null],
                [2, 'mat-form-field-autofilled', null],
                [2, 'mat-focused', null],
                [2, 'mat-accent', null],
                [2, 'mat-warn', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
                [2, '_mat-animation-noopable', null]
              ],
              null,
              null,
              sl.b,
              sl.a
            )),
            t.rb(39, 7520256, null, 7, cl.c, [t.k, t.h, [2, Y.j], [2, v.b], [2, cl.a], _.a, t.B, [2, S.a]], null, null),
            t.Hb(335544320, 8, { _control: 0 }),
            t.Hb(335544320, 9, { _placeholderChild: 0 }),
            t.Hb(335544320, 10, { _labelChild: 0 }),
            t.Hb(603979776, 11, { _errorChildren: 1 }),
            t.Hb(603979776, 12, { _hintChildren: 1 }),
            t.Hb(603979776, 13, { _prefixChildren: 1 }),
            t.Hb(603979776, 14, { _suffixChildren: 1 }),
            (l()(), t.Jb(-1, 1, ['\n          '])),
            (l()(),
            t.sb(
              48,
              0,
              null,
              1,
              8,
              'input',
              [
                ['autocomplete', 'Email'],
                ['class', 'mat-input-element mat-form-field-autofill-control'],
                ['formControlName', 'email'],
                ['matInput', '']
              ],
              [
                [2, 'mat-input-server', null],
                [1, 'id', 0],
                [1, 'placeholder', 0],
                [8, 'disabled', 0],
                [8, 'required', 0],
                [1, 'readonly', 0],
                [1, 'aria-describedby', 0],
                [1, 'aria-invalid', 0],
                [1, 'aria-required', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'input'], [null, 'blur'], [null, 'compositionstart'], [null, 'compositionend'], [null, 'focus']],
              function(l, n, e) {
                var a = !0;
                return (
                  'input' === n && (a = !1 !== t.Cb(l, 49)._handleInput(e.target.value) && a),
                  'blur' === n && (a = !1 !== t.Cb(l, 49).onTouched() && a),
                  'compositionstart' === n && (a = !1 !== t.Cb(l, 49)._compositionStart() && a),
                  'compositionend' === n && (a = !1 !== t.Cb(l, 49)._compositionEnd(e.target.value) && a),
                  'blur' === n && (a = !1 !== t.Cb(l, 53)._focusChanged(!1) && a),
                  'focus' === n && (a = !1 !== t.Cb(l, 53)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== t.Cb(l, 53)._onInput() && a),
                  a
                );
              },
              null,
              null
            )),
            t.rb(49, 16384, null, 0, W.d, [t.G, t.k, [2, W.a]], null, null),
            t.Gb(
              1024,
              null,
              W.j,
              function(l) {
                return [l];
              },
              [W.d]
            ),
            t.rb(
              51,
              671744,
              null,
              0,
              W.f,
              [[3, W.c], [8, null], [8, null], [6, W.j], [2, W.v]],
              { name: [0, 'name'] },
              null
            ),
            t.Gb(2048, null, W.k, null, [W.f]),
            t.rb(
              53,
              999424,
              null,
              0,
              _l.a,
              [t.k, _.a, [6, W.k], [2, W.n], [2, W.g], Y.d, [8, null], wl.a, t.B],
              { placeholder: [0, 'placeholder'] },
              null
            ),
            t.Eb(131072, Z.k, [Z.l, t.h]),
            t.rb(55, 16384, null, 0, W.l, [[4, W.k]], null, null),
            t.Gb(2048, [[8, 4]], cl.d, null, [_l.a]),
            (l()(), t.Jb(-1, 1, ['\n          '])),
            (l()(), t.jb(16777216, null, 5, 1, null, Ll)),
            t.rb(59, 16384, null, 0, y.k, [t.R, t.O], { ngIf: [0, 'ngIf'] }, null),
            (l()(), t.Jb(-1, 1, ['\n        '])),
            (l()(), t.Jb(-1, null, ['\n\n        '])),
            (l()(),
            t.sb(
              62,
              0,
              null,
              null,
              19,
              'mat-form-field',
              [['class', 'mat-form-field']],
              [
                [2, 'mat-form-field-appearance-standard', null],
                [2, 'mat-form-field-appearance-fill', null],
                [2, 'mat-form-field-appearance-outline', null],
                [2, 'mat-form-field-appearance-legacy', null],
                [2, 'mat-form-field-invalid', null],
                [2, 'mat-form-field-can-float', null],
                [2, 'mat-form-field-should-float', null],
                [2, 'mat-form-field-has-label', null],
                [2, 'mat-form-field-hide-placeholder', null],
                [2, 'mat-form-field-disabled', null],
                [2, 'mat-form-field-autofilled', null],
                [2, 'mat-focused', null],
                [2, 'mat-accent', null],
                [2, 'mat-warn', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
                [2, '_mat-animation-noopable', null]
              ],
              null,
              null,
              sl.b,
              sl.a
            )),
            t.rb(63, 7520256, null, 7, cl.c, [t.k, t.h, [2, Y.j], [2, v.b], [2, cl.a], _.a, t.B, [2, S.a]], null, null),
            t.Hb(335544320, 15, { _control: 0 }),
            t.Hb(335544320, 16, { _placeholderChild: 0 }),
            t.Hb(335544320, 17, { _labelChild: 0 }),
            t.Hb(603979776, 18, { _errorChildren: 1 }),
            t.Hb(603979776, 19, { _hintChildren: 1 }),
            t.Hb(603979776, 20, { _prefixChildren: 1 }),
            t.Hb(603979776, 21, { _suffixChildren: 1 }),
            (l()(), t.Jb(-1, 1, ['\n          '])),
            (l()(),
            t.sb(
              72,
              0,
              null,
              1,
              8,
              'input',
              [
                ['autocomplete', 'Phone Number'],
                ['class', 'mat-input-element mat-form-field-autofill-control'],
                ['formControlName', 'phone'],
                ['matInput', ''],
                ['type', 'text']
              ],
              [
                [2, 'mat-input-server', null],
                [1, 'id', 0],
                [1, 'placeholder', 0],
                [8, 'disabled', 0],
                [8, 'required', 0],
                [1, 'readonly', 0],
                [1, 'aria-describedby', 0],
                [1, 'aria-invalid', 0],
                [1, 'aria-required', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'input'], [null, 'blur'], [null, 'compositionstart'], [null, 'compositionend'], [null, 'focus']],
              function(l, n, e) {
                var a = !0;
                return (
                  'input' === n && (a = !1 !== t.Cb(l, 73)._handleInput(e.target.value) && a),
                  'blur' === n && (a = !1 !== t.Cb(l, 73).onTouched() && a),
                  'compositionstart' === n && (a = !1 !== t.Cb(l, 73)._compositionStart() && a),
                  'compositionend' === n && (a = !1 !== t.Cb(l, 73)._compositionEnd(e.target.value) && a),
                  'blur' === n && (a = !1 !== t.Cb(l, 77)._focusChanged(!1) && a),
                  'focus' === n && (a = !1 !== t.Cb(l, 77)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== t.Cb(l, 77)._onInput() && a),
                  a
                );
              },
              null,
              null
            )),
            t.rb(73, 16384, null, 0, W.d, [t.G, t.k, [2, W.a]], null, null),
            t.Gb(
              1024,
              null,
              W.j,
              function(l) {
                return [l];
              },
              [W.d]
            ),
            t.rb(
              75,
              671744,
              null,
              0,
              W.f,
              [[3, W.c], [8, null], [8, null], [6, W.j], [2, W.v]],
              { name: [0, 'name'] },
              null
            ),
            t.Gb(2048, null, W.k, null, [W.f]),
            t.rb(
              77,
              999424,
              null,
              0,
              _l.a,
              [t.k, _.a, [6, W.k], [2, W.n], [2, W.g], Y.d, [8, null], wl.a, t.B],
              { placeholder: [0, 'placeholder'], type: [1, 'type'] },
              null
            ),
            t.Eb(131072, Z.k, [Z.l, t.h]),
            t.rb(79, 16384, null, 0, W.l, [[4, W.k]], null, null),
            t.Gb(2048, [[15, 4]], cl.d, null, [_l.a]),
            (l()(), t.Jb(-1, 1, ['\n        '])),
            (l()(), t.Jb(-1, null, ['\n\n        '])),
            (l()(), t.jb(16777216, null, null, 1, null, Hl)),
            t.rb(84, 16384, null, 0, y.k, [t.R, t.O], { ngIf: [0, 'ngIf'] }, null),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.Jb(-1, null, ['\n    '])),
            (l()(), t.Jb(-1, 0, ['\n\n    '])),
            (l()(),
            t.sb(
              88,
              0,
              null,
              0,
              27,
              'mat-card-actions',
              [['class', 'mat-card-actions']],
              [[2, 'mat-card-actions-align-end', null]],
              null,
              null,
              null,
              null
            )),
            t.rb(89, 16384, null, 0, x.b, [], null, null),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.sb(91, 0, null, null, 23, 'div', [['class', 'grid function']], null, null, null, null, null)),
            (l()(), t.Jb(-1, null, ['\n        '])),
            (l()(), t.jb(16777216, null, null, 1, null, Pl)),
            t.rb(94, 16384, null, 0, y.k, [t.R, t.O], { ngIf: [0, 'ngIf'] }, null),
            (l()(), t.Jb(-1, null, ['\n        '])),
            (l()(),
            t.sb(
              96,
              0,
              null,
              null,
              6,
              'button',
              [['mat-raised-button', ''], ['type', 'button']],
              [[8, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, e) {
                var t = !0;
                return 'click' === n && (t = !1 !== l.component.cancel() && t), t;
              },
              w.b,
              w.a
            )),
            t.rb(97, 180224, null, 0, J.b, [t.k, _.a, A.g, [2, S.a]], null, null),
            (l()(), t.Jb(-1, 0, ['\n          '])),
            (l()(), t.sb(99, 0, null, 0, 2, 'span', [['translate', '']], null, null, null, null, null)),
            t.rb(100, 8536064, null, 0, Z.e, [Z.l, t.k, t.h], { translate: [0, 'translate'] }, null),
            (l()(), t.Jb(-1, null, ['Cancel'])),
            (l()(), t.Jb(-1, 0, ['\n        '])),
            (l()(), t.Jb(-1, null, ['\n        '])),
            (l()(),
            t.sb(
              104,
              0,
              null,
              null,
              9,
              'button',
              [['color', 'primary'], ['mat-raised-button', ''], ['type', 'submit']],
              [[8, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              null,
              null,
              w.b,
              w.a
            )),
            t.rb(
              105,
              180224,
              null,
              0,
              J.b,
              [t.k, _.a, A.g, [2, S.a]],
              { disabled: [0, 'disabled'], color: [1, 'color'] },
              null
            ),
            (l()(), t.Jb(-1, 0, ['\n          '])),
            (l()(), t.sb(107, 0, null, 0, 1, 'app-loader', [['class', 'inline-loader']], null, null, null, Jl.b, Jl.a)),
            t.rb(108, 114688, null, 0, Al.a, [], { isLoading: [0, 'isLoading'] }, null),
            (l()(), t.Jb(-1, 0, ['\n          '])),
            (l()(), t.sb(110, 0, null, 0, 2, 'span', [['translate', '']], null, null, null, null, null)),
            t.rb(111, 8536064, null, 0, Z.e, [Z.l, t.k, t.h], { translate: [0, 'translate'] }, null),
            (l()(), t.Jb(-1, null, ['Save'])),
            (l()(), t.Jb(-1, 0, ['\n        '])),
            (l()(), t.Jb(-1, null, ['\n      '])),
            (l()(), t.Jb(-1, null, ['\n    '])),
            (l()(), t.Jb(-1, 0, ['\n  '])),
            (l()(), t.Jb(-1, null, ['\n'])),
            (l()(), t.Jb(-1, null, ['\n']))
          ],
          function(l, n) {
            var e = n.component;
            l(n, 2, 0, e.submitForm),
              l(n, 27, 0, 'name'),
              l(n, 29, 0, t.Kb(n, 29, 0, t.Cb(n, 30).transform('Staff Name')), 'text'),
              l(n, 35, 0, e.submitForm.controls.name.valid || e.submitForm.controls.name.untouched),
              l(n, 51, 0, 'email'),
              l(n, 53, 0, t.Kb(n, 53, 0, t.Cb(n, 54).transform('Email'))),
              l(n, 59, 0, e.submitForm.controls.email.invalid),
              l(n, 75, 0, 'phone'),
              l(n, 77, 0, t.Kb(n, 77, 0, t.Cb(n, 78).transform('Phone Number')), 'text'),
              l(n, 84, 0, !e.isOwner),
              l(n, 94, 0, e.isEditMode),
              l(n, 100, 0, ''),
              l(n, 105, 0, e.submitForm.invalid || e.isLoading, 'primary'),
              l(n, 108, 0, e.isLoading),
              l(n, 111, 0, '');
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              t.Cb(n, 4).ngClassUntouched,
              t.Cb(n, 4).ngClassTouched,
              t.Cb(n, 4).ngClassPristine,
              t.Cb(n, 4).ngClassDirty,
              t.Cb(n, 4).ngClassValid,
              t.Cb(n, 4).ngClassInvalid,
              t.Cb(n, 4).ngClassPending
            ),
              l(n, 14, 1, [
                'standard' == t.Cb(n, 15).appearance,
                'fill' == t.Cb(n, 15).appearance,
                'outline' == t.Cb(n, 15).appearance,
                'legacy' == t.Cb(n, 15).appearance,
                t.Cb(n, 15)._control.errorState,
                t.Cb(n, 15)._canLabelFloat,
                t.Cb(n, 15)._shouldLabelFloat(),
                t.Cb(n, 15)._hasFloatingLabel(),
                t.Cb(n, 15)._hideControlPlaceholder(),
                t.Cb(n, 15)._control.disabled,
                t.Cb(n, 15)._control.autofilled,
                t.Cb(n, 15)._control.focused,
                'accent' == t.Cb(n, 15).color,
                'warn' == t.Cb(n, 15).color,
                t.Cb(n, 15)._shouldForward('untouched'),
                t.Cb(n, 15)._shouldForward('touched'),
                t.Cb(n, 15)._shouldForward('pristine'),
                t.Cb(n, 15)._shouldForward('dirty'),
                t.Cb(n, 15)._shouldForward('valid'),
                t.Cb(n, 15)._shouldForward('invalid'),
                t.Cb(n, 15)._shouldForward('pending'),
                !t.Cb(n, 15)._animationsEnabled
              ]),
              l(n, 24, 1, [
                t.Cb(n, 29)._isServer,
                t.Cb(n, 29).id,
                t.Cb(n, 29).placeholder,
                t.Cb(n, 29).disabled,
                t.Cb(n, 29).required,
                (t.Cb(n, 29).readonly && !t.Cb(n, 29)._isNativeSelect) || null,
                t.Cb(n, 29)._ariaDescribedby || null,
                t.Cb(n, 29).errorState,
                t.Cb(n, 29).required.toString(),
                t.Cb(n, 31).ngClassUntouched,
                t.Cb(n, 31).ngClassTouched,
                t.Cb(n, 31).ngClassPristine,
                t.Cb(n, 31).ngClassDirty,
                t.Cb(n, 31).ngClassValid,
                t.Cb(n, 31).ngClassInvalid,
                t.Cb(n, 31).ngClassPending
              ]),
              l(n, 38, 1, [
                'standard' == t.Cb(n, 39).appearance,
                'fill' == t.Cb(n, 39).appearance,
                'outline' == t.Cb(n, 39).appearance,
                'legacy' == t.Cb(n, 39).appearance,
                t.Cb(n, 39)._control.errorState,
                t.Cb(n, 39)._canLabelFloat,
                t.Cb(n, 39)._shouldLabelFloat(),
                t.Cb(n, 39)._hasFloatingLabel(),
                t.Cb(n, 39)._hideControlPlaceholder(),
                t.Cb(n, 39)._control.disabled,
                t.Cb(n, 39)._control.autofilled,
                t.Cb(n, 39)._control.focused,
                'accent' == t.Cb(n, 39).color,
                'warn' == t.Cb(n, 39).color,
                t.Cb(n, 39)._shouldForward('untouched'),
                t.Cb(n, 39)._shouldForward('touched'),
                t.Cb(n, 39)._shouldForward('pristine'),
                t.Cb(n, 39)._shouldForward('dirty'),
                t.Cb(n, 39)._shouldForward('valid'),
                t.Cb(n, 39)._shouldForward('invalid'),
                t.Cb(n, 39)._shouldForward('pending'),
                !t.Cb(n, 39)._animationsEnabled
              ]),
              l(n, 48, 1, [
                t.Cb(n, 53)._isServer,
                t.Cb(n, 53).id,
                t.Cb(n, 53).placeholder,
                t.Cb(n, 53).disabled,
                t.Cb(n, 53).required,
                (t.Cb(n, 53).readonly && !t.Cb(n, 53)._isNativeSelect) || null,
                t.Cb(n, 53)._ariaDescribedby || null,
                t.Cb(n, 53).errorState,
                t.Cb(n, 53).required.toString(),
                t.Cb(n, 55).ngClassUntouched,
                t.Cb(n, 55).ngClassTouched,
                t.Cb(n, 55).ngClassPristine,
                t.Cb(n, 55).ngClassDirty,
                t.Cb(n, 55).ngClassValid,
                t.Cb(n, 55).ngClassInvalid,
                t.Cb(n, 55).ngClassPending
              ]),
              l(n, 62, 1, [
                'standard' == t.Cb(n, 63).appearance,
                'fill' == t.Cb(n, 63).appearance,
                'outline' == t.Cb(n, 63).appearance,
                'legacy' == t.Cb(n, 63).appearance,
                t.Cb(n, 63)._control.errorState,
                t.Cb(n, 63)._canLabelFloat,
                t.Cb(n, 63)._shouldLabelFloat(),
                t.Cb(n, 63)._hasFloatingLabel(),
                t.Cb(n, 63)._hideControlPlaceholder(),
                t.Cb(n, 63)._control.disabled,
                t.Cb(n, 63)._control.autofilled,
                t.Cb(n, 63)._control.focused,
                'accent' == t.Cb(n, 63).color,
                'warn' == t.Cb(n, 63).color,
                t.Cb(n, 63)._shouldForward('untouched'),
                t.Cb(n, 63)._shouldForward('touched'),
                t.Cb(n, 63)._shouldForward('pristine'),
                t.Cb(n, 63)._shouldForward('dirty'),
                t.Cb(n, 63)._shouldForward('valid'),
                t.Cb(n, 63)._shouldForward('invalid'),
                t.Cb(n, 63)._shouldForward('pending'),
                !t.Cb(n, 63)._animationsEnabled
              ]),
              l(n, 72, 1, [
                t.Cb(n, 77)._isServer,
                t.Cb(n, 77).id,
                t.Cb(n, 77).placeholder,
                t.Cb(n, 77).disabled,
                t.Cb(n, 77).required,
                (t.Cb(n, 77).readonly && !t.Cb(n, 77)._isNativeSelect) || null,
                t.Cb(n, 77)._ariaDescribedby || null,
                t.Cb(n, 77).errorState,
                t.Cb(n, 77).required.toString(),
                t.Cb(n, 79).ngClassUntouched,
                t.Cb(n, 79).ngClassTouched,
                t.Cb(n, 79).ngClassPristine,
                t.Cb(n, 79).ngClassDirty,
                t.Cb(n, 79).ngClassValid,
                t.Cb(n, 79).ngClassInvalid,
                t.Cb(n, 79).ngClassPending
              ]),
              l(n, 88, 0, 'end' === t.Cb(n, 89).align),
              l(n, 96, 0, t.Cb(n, 97).disabled || null, 'NoopAnimations' === t.Cb(n, 97)._animationMode),
              l(n, 104, 0, t.Cb(n, 105).disabled || null, 'NoopAnimations' === t.Cb(n, 105)._animationMode);
          }
        );
      }
      function Il(l) {
        return t.Lb(
          0,
          [
            (l()(), t.sb(0, 0, null, null, 1, 'app-staff-edit', [], null, null, null, Ml, Ol)),
            t.rb(1, 114688, null, 0, Sl, [W.e, b.l, b.a, F], null, null)
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var Gl = t.ob('app-staff-edit', Sl, Il, {}, {}, []),
        Dl = e('OzfB'),
        El = e('4tE/'),
        Rl = e('o3x0'),
        ql = e('jQLj'),
        zl = e('mVsa'),
        Nl = e('v9Dh'),
        Bl = e('4epT'),
        Tl = e('OkvK'),
        Ul = e('wmQ5'),
        Vl = e('21Lb'),
        Yl = e('hUWP'),
        $l = e('3pJQ'),
        Wl = e('V9q+'),
        Xl = e('u7R8'),
        Kl = e('/dO6'),
        Zl = e('LC5p'),
        Ql = e('YhbO'),
        ln = e('jlZm'),
        nn = e('r43C'),
        en = e('SMsm'),
        tn = e('0/Q6'),
        an = e('Z+uX'),
        un = e('Blfk'),
        on = e('9It4'),
        rn = e('Nsh5'),
        cn = e('kWGw'),
        bn = e('w+lc'),
        sn = e('vARd'),
        dn = e('Lwpp'),
        mn = e('La40'),
        pn = e('8mMr'),
        hn = e('vvyD'),
        fn = e('PCNd'),
        gn = e('ey9i'),
        Cn = { title: Object(gn.c)('Staff') },
        kn = { title: Object(gn.c)('Staff Permission') },
        xn = { title: Object(gn.c)('Staff Add') },
        vn = { title: Object(gn.c)('Staff Edit') },
        yn = (function() {
          return function() {};
        })(),
        _n = e('YSh2');
      e.d(n, 'StaffModuleNgFactory', function() {
        return wn;
      });
      var wn = t.pb(a, [], function(l) {
        return t.zb([
          t.Ab(512, t.j, t.eb, [[8, [u.a, i.b, i.a, o.a, r.a, r.b, c.a, h, T, rl, Gl]], [3, t.j], t.z]),
          t.Ab(
            5120,
            t.b,
            function(l, n) {
              return [Dl.k(l, n)];
            },
            [y.d, t.D]
          ),
          t.Ab(4608, y.m, y.l, [t.w, [2, y.x]]),
          t.Ab(4608, ml.c, ml.c, [ml.i, ml.e, t.j, ml.h, ml.f, t.s, t.B, y.d, v.b, [2, y.g]]),
          t.Ab(5120, ml.j, ml.k, [ml.c]),
          t.Ab(5120, El.a, El.b, [ml.c]),
          t.Ab(4608, V.c, V.c, []),
          t.Ab(4608, Y.d, Y.d, []),
          t.Ab(5120, Rl.b, Rl.c, [ml.c]),
          t.Ab(135680, Rl.d, Rl.d, [ml.c, t.s, [2, y.g], [2, Rl.a], Rl.b, [3, Rl.d], ml.e]),
          t.Ab(4608, ql.h, ql.h, []),
          t.Ab(5120, ql.a, ql.b, [ml.c]),
          t.Ab(5120, zl.b, zl.g, [ml.c]),
          t.Ab(4608, Y.c, Y.y, [[2, Y.h], _.a]),
          t.Ab(5120, dl.a, dl.b, [ml.c]),
          t.Ab(5120, Nl.a, Nl.b, [ml.c]),
          t.Ab(4608, $.f, Y.e, [[2, Y.i], [2, Y.n]]),
          t.Ab(5120, Bl.b, Bl.a, [[3, Bl.b]]),
          t.Ab(5120, Tl.b, Tl.a, [[3, Tl.b]]),
          t.Ab(5120, Ul.b, Ul.a, [[3, Ul.b]]),
          t.Ab(4608, W.e, W.e, []),
          t.Ab(4608, W.u, W.u, []),
          t.Ab(4608, F, F, [O.c]),
          t.Ab(1073742336, Dl.c, Dl.c, []),
          t.Ab(1073742336, v.a, v.a, []),
          t.Ab(1073742336, Vl.g, Vl.g, []),
          t.Ab(1073742336, Yl.c, Yl.c, []),
          t.Ab(1073742336, $l.a, $l.a, []),
          t.Ab(1073742336, Wl.a, Wl.a, [[2, Dl.h], t.D]),
          t.Ab(1073742336, Y.n, Y.n, [[2, Y.f], [2, $.g]]),
          t.Ab(1073742336, _.b, _.b, []),
          t.Ab(1073742336, Y.x, Y.x, []),
          t.Ab(1073742336, y.c, y.c, []),
          t.Ab(1073742336, Y.v, Y.v, []),
          t.Ab(1073742336, Y.s, Y.s, []),
          t.Ab(1073742336, pl.g, pl.g, []),
          t.Ab(1073742336, hl.c, hl.c, []),
          t.Ab(1073742336, ml.g, ml.g, []),
          t.Ab(1073742336, El.c, El.c, []),
          t.Ab(1073742336, J.c, J.c, []),
          t.Ab(1073742336, Xl.a, Xl.a, []),
          t.Ab(1073742336, x.e, x.e, []),
          t.Ab(1073742336, V.d, V.d, []),
          t.Ab(1073742336, U.c, U.c, []),
          t.Ab(1073742336, Kl.b, Kl.b, []),
          t.Ab(1073742336, Rl.g, Rl.g, []),
          t.Ab(1073742336, A.a, A.a, []),
          t.Ab(1073742336, ql.i, ql.i, []),
          t.Ab(1073742336, Zl.b, Zl.b, []),
          t.Ab(1073742336, Ql.c, Ql.c, []),
          t.Ab(1073742336, ln.a, ln.a, []),
          t.Ab(1073742336, cl.e, cl.e, []),
          t.Ab(1073742336, Y.o, Y.o, []),
          t.Ab(1073742336, nn.a, nn.a, []),
          t.Ab(1073742336, en.c, en.c, []),
          t.Ab(1073742336, wl.c, wl.c, []),
          t.Ab(1073742336, _l.b, _l.b, []),
          t.Ab(1073742336, tn.c, tn.c, []),
          t.Ab(1073742336, zl.e, zl.e, []),
          t.Ab(1073742336, Y.z, Y.z, []),
          t.Ab(1073742336, Y.p, Y.p, []),
          t.Ab(1073742336, dl.d, dl.d, []),
          t.Ab(1073742336, Nl.c, Nl.c, []),
          t.Ab(1073742336, Bl.c, Bl.c, []),
          t.Ab(1073742336, an.a, an.a, []),
          t.Ab(1073742336, un.c, un.c, []),
          t.Ab(1073742336, on.a, on.a, []),
          t.Ab(1073742336, rn.h, rn.h, []),
          t.Ab(1073742336, cn.c, cn.c, []),
          t.Ab(1073742336, bn.a, bn.a, []),
          t.Ab(1073742336, sn.d, sn.d, []),
          t.Ab(1073742336, Tl.c, Tl.c, []),
          t.Ab(1073742336, dn.e, dn.e, []),
          t.Ab(1073742336, Ul.c, Ul.c, []),
          t.Ab(1073742336, g.p, g.p, []),
          t.Ab(1073742336, f.l, f.l, []),
          t.Ab(1073742336, mn.a, mn.a, []),
          t.Ab(1073742336, pn.b, pn.b, []),
          t.Ab(1073742336, hn.a, hn.a, []),
          t.Ab(1073742336, Z.i, Z.i, []),
          t.Ab(1073742336, fn.a, fn.a, []),
          t.Ab(1073742336, W.s, W.s, []),
          t.Ab(1073742336, W.p, W.p, []),
          t.Ab(1073742336, W.h, W.h, []),
          t.Ab(1073742336, b.o, b.o, [[2, b.u], [2, b.l]]),
          t.Ab(1073742336, yn, yn, []),
          t.Ab(1073742336, a, a, []),
          t.Ab(256, Kl.a, { separatorKeyCodes: [_n.f] }, []),
          t.Ab(256, Y.g, Y.k, []),
          t.Ab(
            1024,
            b.j,
            function() {
              return [
                [
                  {
                    path: '',
                    component: s,
                    children: [
                      { path: '', component: L, data: Cn },
                      { path: 'permission', component: nl, data: kn },
                      { path: 'add', component: Sl, data: xn },
                      { path: 'edit/:id', component: Sl, data: vn }
                    ]
                  }
                ]
              ];
            },
            []
          )
        ]);
      });
    }
  }
]);
