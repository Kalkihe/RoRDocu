var search_data = {"index":{"searchIndex":["erb","defmethod","util","def_class()","def_erb_method()","def_method()","def_module()","h()","html_escape()","location=()","make_compiler()","new()","result()","result_with_hash()","run()","set_eoutvar()","u()","url_encode()","version()"],"longSearchIndex":["erb","erb::defmethod","erb::util","erb#def_class()","erb::defmethod::def_erb_method()","erb#def_method()","erb#def_module()","erb::util::h()","erb::util::html_escape()","erb#location=()","erb#make_compiler()","erb::new()","erb#result()","erb#result_with_hash()","erb#run()","erb#set_eoutvar()","erb::util::u()","erb::util::url_encode()","erb::version()"],"info":[["ERB","","ERB.html","",""],["ERB::DefMethod","","ERB/DefMethod.html","","<p>Utility module to define eRuby script as instance method.\n<p>Example\n<p>example.rhtml:\n"],["ERB::Util","","ERB/Util.html","","<p>A utility module for conversion routines, often handy in HTML generation.\n"],["def_class","ERB","ERB.html#method-i-def_class","(superklass=Object, methodname='result')","<p>Define unnamed class which has <em>methodname</em> as instance method, and\nreturn it.\n<p>example:\n\n<pre>class MyClass_\n  ...</pre>\n"],["def_erb_method","ERB::DefMethod","ERB/DefMethod.html#method-c-def_erb_method","(methodname, erb_or_fname)","<p>define <em>methodname</em> as instance method of current module, using ERB\nobject or eRuby file\n"],["def_method","ERB","ERB.html#method-i-def_method","(mod, methodname, fname='(ERB)')","<p>Define <em>methodname</em> as instance method of <em>mod</em> from compiled\nRuby source.\n<p>example:\n\n<pre>filename = &#39;example.rhtml&#39; ...</pre>\n"],["def_module","ERB","ERB.html#method-i-def_module","(methodname='erb')","<p>Create unnamed module, define <em>methodname</em> as instance method of it,\nand return it.\n<p>example:\n\n<pre>filename = &#39;example.rhtml&#39; ...</pre>\n"],["h","ERB::Util","ERB/Util.html#method-c-h","(s)",""],["html_escape","ERB::Util","ERB/Util.html#method-c-html_escape","(s)","<p>A utility method for escaping HTML tag characters in <em>s</em>.\n\n<pre>require &quot;erb&quot;\ninclude ERB::Util\n\nputs html_escape(&quot;is ...</pre>\n"],["location=","ERB","ERB.html#method-i-location-3D","((filename, lineno))","<p>Sets optional filename and line number that will be used in ERB code\nevaluation and error reporting. …\n"],["make_compiler","ERB","ERB.html#method-i-make_compiler","(trim_mode)","<p>Creates a new compiler for ERB.  See ERB::Compiler.new for details\n"],["new","ERB","ERB.html#method-c-new","(str, safe_level=NOT_GIVEN, legacy_trim_mode=NOT_GIVEN, legacy_eoutvar=NOT_GIVEN, trim_mode: nil, eoutvar: '_erbout')","<p>Constructs a new ERB object with the template specified in <em>str</em>.\n<p>An ERB object works by building a chunk …\n"],["result","ERB","ERB.html#method-i-result","(b=new_toplevel)","<p>Executes the generated ERB code to produce a completed template, returning\nthe results of that code. …\n"],["result_with_hash","ERB","ERB.html#method-i-result_with_hash","(hash)","<p>Render a template on a new toplevel binding with local variables specified\nby a Hash object.\n"],["run","ERB","ERB.html#method-i-run","(b=new_toplevel)","<p>Generate results and print them. (see ERB#result)\n"],["set_eoutvar","ERB","ERB.html#method-i-set_eoutvar","(compiler, eoutvar = '_erbout')","<p>Can be used to set <em>eoutvar</em> as described in ERB::new.  It&#39;s\nprobably easier to just use the constructor …\n"],["u","ERB::Util","ERB/Util.html#method-c-u","(s)",""],["url_encode","ERB::Util","ERB/Util.html#method-c-url_encode","(s)","<p>A utility method for encoding the String <em>s</em> as a URL.\n\n<pre>require &quot;erb&quot;\ninclude ERB::Util\n\nputs url_encode(&quot;Programming ...</pre>\n"],["version","ERB","ERB.html#method-c-version","()","<p>Returns revision information for the erb.rb module.\n"]]}}