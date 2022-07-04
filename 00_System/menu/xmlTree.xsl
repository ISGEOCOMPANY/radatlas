<?xml version="1.0" encoding="windows-1251"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:output method="html"></xsl:output>
  <xsl:template match="/">
    <html id="htmlSearch">
      <head>
        <title></title>
        <link rel="stylesheet" type="text/css" href="xmlTree.css"/>
        <script type="text/javascript" src="xmlTree.js"></script>
      </head>
      <body>
        <form>
          <p id="inputsForSearch">
            <input id="searchForMenuInput" type="text" name="searchText" placeholder="" /> 
            <input id="searchForMenuSubmit" type="image" src="images/button_search.png" alt="Поиск" onclick="text = document.getElementsByName('searchText')[0].value; searchInMenu(text,event);"/>
            <img id="searchForMenuClear" src="images/button_zoom_in.png" alt="" onclick="clearMenuSearch()"/>
          </p>
        </form>
        <script type="text/javascript" src="hintMenuLanguage.js"></script>
        <xsl:apply-templates/>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="tree">
    <body>
        <xsl:apply-templates/>
    </body>
  </xsl:template>
  
  <xsl:template match="branch">
    <span class="trigger">
      <xsl:attribute name="title">
        <xsl:value-of select="branchText"/>
      </xsl:attribute>
      <xsl:attribute name="onClick">
        showBranch('<xsl:value-of select="@id"/>');
      </xsl:attribute>
      <img src="images/ico_01.gif">
        <xsl:attribute name="id">I<xsl:value-of select="@id"/></xsl:attribute>
      </img>
      <xsl:if test="not(link)">
        <xsl:value-of select="branchText"/>
      </xsl:if>
      <xsl:if test="link != ''">
        <a target="contents">
          <xsl:attribute name="name"><xsl:value-of select="link"/></xsl:attribute>
          <xsl:attribute name="indexedWords"><xsl:value-of select="indexedWords"/></xsl:attribute>
          <xsl:attribute name="onClick">
          if (this.classList.contains('searchItemMenu')){this.classList.remove('searchItemMenu');} clearItemsMenu("activeItemMenu"); this.classList.add('activeItemMenu');
            TreeViewAtlas1_OnChange("<xsl:value-of select="Frame"/>","<xsl:value-of select="link"/>");
          </xsl:attribute>
          <!--<xsl:attribute name="href" >
            <xsl:value-of select="link"/>
          </xsl:attribute>-->
          <xsl:value-of select="branchText"/>
        </a>
      </xsl:if>
      <xsl:if test="link = ''">
        <label>
          <xsl:attribute name="onClick">if (this.classList.contains('searchItemMenu')){this.classList.remove('searchItemMenu');} clearItemsMenu("activeItemMenu");</xsl:attribute>
          <xsl:value-of select="branchText"/>
        </label>
      </xsl:if>
    </span>
    <span class="branch">
      <xsl:attribute name="id">
        <xsl:value-of select="@id"/>
      </xsl:attribute>
      <xsl:apply-templates/>
    </span>
  </xsl:template>
  
  <xsl:template match="leaf">
    <img>
      <xsl:choose>
        <xsl:when test="ImageIndex=5">
          <xsl:attribute name="src">images/ico_12.gif</xsl:attribute>
        </xsl:when>
        <xsl:when test="ImageIndex=4">
          <xsl:attribute name="src">images/ico_11.gif</xsl:attribute>
        </xsl:when>
      </xsl:choose>
    </img>
    <a target="contents">
      <xsl:attribute name="name"><xsl:value-of select="link"/></xsl:attribute>
      <xsl:attribute name="indexedWords"><xsl:value-of select="indexedWords"/></xsl:attribute>
      <xsl:attribute name="onClick">
      if (this.classList.contains('searchItemMenu')){this.classList.remove('searchItemMenu');} clearItemsMenu("activeItemMenu"); this.classList.add('activeItemMenu');
        TreeViewAtlas1_OnChange("<xsl:value-of select="Frame"/>","<xsl:value-of select="link"/>");
      </xsl:attribute>
      <xsl:attribute name="title">
        <xsl:value-of select="leafText"/>
      </xsl:attribute>
      <!--<xsl:attribute name="href" >
        <xsl:value-of select="link"/>
      </xsl:attribute>-->
      <xsl:value-of select="leafText"/>
    </a>
  </xsl:template>
  
  <!--!!!EXCEPTIONS FOR FOLDERS!!!-->
  <!-- avoid output of text node with default template / запобігання виводу тексту вузла з шаблоном за замовчуванням -->
  <xsl:template match="branchText"/>
  <!-- avoid output of description node (branchDescription) with default template / запобігання виводу опису вузла з шаблоном за замовчуванням -->
  <xsl:template match="branchDescription"/>
  <!-- avoid output of ImageIndex node with default template / запобігання виводу індекса піктограми вузла з шаблоном за замовчуванням -->
  <xsl:template match="ImageIndex"/>
  <!-- avoid output of Frame node with default template  / запобігання виводу фрейму вузла з шаблоном за замовчуванням -->
  <xsl:template match="Frame"/>
  <!-- avoid output of link node with default template  / запобігання виводу посилання вузла з шаблоном за замовчуванням -->
  <xsl:template match="link"/>
  <xsl:template match="indexedWords"/>
</xsl:stylesheet>